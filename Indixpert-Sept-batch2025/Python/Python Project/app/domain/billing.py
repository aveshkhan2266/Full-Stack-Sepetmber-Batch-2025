from ..domain.handling import Handelfile
from ..model.path import Pathmodel

class BillService:

    @staticmethod
    def generate_bill():
        booked_tables = Handelfile.load_json(Pathmodel.BOOKED, [])
        orders = Handelfile.load_json(Pathmodel.ORDER, [])
        bills = Handelfile.load_json(Pathmodel.BILL, [])

        if not booked_tables:
            print("No booked tables found")
            return

        try:
            table_no = int(input("Enter Table No: "))
        except ValueError:
            print("Invalid table number")
            return

        if not any(t["table_no"] == table_no for t in booked_tables):
            print("Table not booked")
            return

        table_orders = [o for o in orders if o.get("table_no") == table_no]

        if not table_orders:
            print("No orders for this table")
            return

        print("\n========= BILL =========")
        print(f"Table No : {table_no}")
        print("------------------------")

        total = 0
        bill_items = []

        for i, o in enumerate(table_orders, 1):
            print(
                f"{i}. {o['item']} ({o['size']}) x {o['quantity']} = ₹{o['price']}"
            )
            total += o["price"]
            bill_items.append({
                "item": o["item"],
                "size": o["size"],
                "quantity": o["quantity"],
                "price": o["price"]
            })

        print("------------------------")
        print(f"TOTAL AMOUNT : ₹{total}")
        print("========================")

        # Save bill to JSON
        bill_data = {
            "table_no": table_no,
            "items": bill_items,
            "total_amount": total
        }
        bills.append(bill_data)
        Handelfile.save_json(Pathmodel.BILL, bills)

        print("Bill saved successfully")

    @staticmethod
    def bill_menu():
        while True:
            print("\n--- BILL MENU ---")
            print("1. Generate Bill")
            print("2. Back")

            choice = input("Choose option: ").strip()

            if choice == "1":
                BillService.generate_bill()
            elif choice == "2":
                break
            else:
                print("Invalid option")
