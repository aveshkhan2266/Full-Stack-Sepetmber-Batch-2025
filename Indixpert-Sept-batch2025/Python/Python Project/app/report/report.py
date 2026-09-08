from ..domain.handling import Handelfile
from ..model.path import Pathmodel

class ReportService:

    @staticmethod
    def generate_report():
        booked_tables = Handelfile.load_json(Pathmodel.BOOKED, [])
        bills = Handelfile.load_json(Pathmodel.BILL, [])

        if not booked_tables:
            print("No tables booked yet.")
            return

        print("\n================ RESTAURANT REPORT ================\n")
        grand_total = 0

        for table in booked_tables:
            table_no = table["table_no"]
            print(f"Table No: {table_no} | Seats: {table.get('seats', 'N/A')} | Status: Booked")
            print("-" * 50)

            # Find bill for this table
            bill = next((b for b in bills if b["table_no"] == table_no), None)

            if bill and bill.get("items"):
                print(f"{'Item':25} {'Size':5} {'Qty':3} {'Price':6}")
                print("-" * 50)
                for item in bill["items"]:
                    name = item["item"]
                    size = item["size"]
                    qty = item["quantity"]
                    price = item["price"]
                    print(f"{name:25} {size:5} {qty:<3} ₹{price:<6}")
                print("-" * 50)
                print(f"Total Amount for Table {table_no}: ₹{bill['total_amount']}\n")
                grand_total += bill["total_amount"]
            else:
                print("No orders placed for this table.\n")

        print("="*50)
        print(f"GRAND TOTAL AMOUNT FOR ALL TABLES: ₹{grand_total}")
        print("="*50)
