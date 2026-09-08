from ..domain.handling import Handelfile
from ..model.path import Pathmodel
from ..menu.food_menu import Show_Menu

class OrderService:

    @staticmethod
    def load_menu():
        menu = Handelfile.load_json(Pathmodel.FOODMENU, {})
        if not menu:
            print("Menu not found. Please check menu.json")
        return menu

    @staticmethod
    def find_item(item_name):
        menu = OrderService.load_menu()
        for meal in menu.values():
            for category in meal.values():
                for item in category:
                    if item["name"].lower() == item_name.lower():
                        return item
        return None

    @staticmethod
    def take_order():
        menu = OrderService.load_menu()
        if not menu:
            return

        orders = Handelfile.load_json(Pathmodel.ORDER, [])
        booked_tables = Handelfile.load_json(Pathmodel.BOOKED, [])

        print("\n--- TAKE ORDER ---")
        customer = input("Customer Name: ").strip()
        item_name = input("Enter Item Name (from menu): ").strip()

        item = OrderService.find_item(item_name)
        if not item:
            print("Item not available in menu")
            return

        size = input("Enter size (full/half): ").lower()
        if size not in ["full", "half"]:
            print("Invalid size")
            return

        try:
            qty = int(input("Quantity: "))
        except ValueError:
            print("Invalid quantity")
            return

        try:
            table_no = int(input("Enter Table No: "))
        except ValueError:
            print("Invalid table number")
            return

        # 🔥 Only allow order for booked tables
        if not any(b["table_no"] == table_no for b in booked_tables):
            print("This table is not booked. Please book table first.")
            return

        total = item[size] * qty

        order = {
            "table_no": table_no,
            "customer": customer,
            "item": item["name"],
            "size": size,
            "quantity": qty,
            "price": total
        }

        orders.append(order)
        Handelfile.save_json(Pathmodel.ORDER, orders)
        print("\nORDER PLACED SUCCESSFULLY\n")

    @staticmethod
    def show_all_orders():
        orders = Handelfile.load_json(Pathmodel.ORDER, [])

        print("\n--- ALL ORDERS ---")
        if not orders:
            print("No orders found")
            return

        for i, o in enumerate(orders, start=1):
            print(f"\nOrder {i}")
            print(f"Customer : {o['customer']}")
            print(f"Item     : {o['item']} ({o['size']})")
            print(f"Quantity : {o['quantity']}")
            print(f"Total    : ₹{o['price']}")

    @staticmethod
    def order_menu():
        while True:
            print("\n--- ORDER MENU ---")
            print("1. View Menu")
            print("2. Take Order")
            print("3. Show All Orders")
            print("4. Back")

            choice = input("Choose option: ").strip()
            if choice == "1":
                Show_Menu.show_menu()
            elif choice == "2":
                OrderService.take_order()
            elif choice == "3":
                OrderService.show_all_orders()
            elif choice == "4":
                break
            else:
                print("Invalid option")
