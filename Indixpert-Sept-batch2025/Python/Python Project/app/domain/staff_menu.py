from .tablebooking import TableService
from .ordersystem import OrderService
from .billing import BillService


class Staff:
    def staff_menu():
        

        while True:
            print("\n===== MAIN MENU =====")
            print("1. Table Booking")
            print("2. Order Booking")
            print("3. Bill")
            print("4. Exit")

            choice = input("Choose option: ").strip()

            if choice == "1":
                TableService.table_menu()
            elif choice == "2":
                OrderService.order_menu()
            elif choice == "3":
                BillService.bill_menu()
            elif choice == "4":
                print("Exit Successful")
                break
            else:
                print("Invalid option")



