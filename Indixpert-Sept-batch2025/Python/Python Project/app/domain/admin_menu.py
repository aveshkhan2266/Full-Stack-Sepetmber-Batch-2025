from ..menu.food_menu_management import FoodMenuManagement
from ..report.report import ReportService

class Admin:

    @staticmethod
    def admin_menu():
        while True:
            print("\n--- ADMIN MENU ---")
            print("1. Menu Management")
            print("2. View Report")
            print("3. Exit")

            choice = input("Choose option: ")

            if choice == "1":
                FoodMenuManagement.menu_management()

            elif choice == "2":
                ReportService.generate_report()

            elif choice == "3":
                break

            else:
                print("Invalid choice")
