from ..menu.food_service import FoodService
from ..menu.food_menu import Show_Menu

class FoodMenuManagement:

    @staticmethod
    def menu_management():
        while True:
            print("\n--- FOOD MENU MANAGEMENT ---")
            print("1. Add Food")
            print("2. View Food")
            print("3. Update Food")
            print("4. Delete Food")
            print("5. Back")

            choice = input("Choose option: ")

            if choice == "1":
                FoodService.add_food()

            elif choice == "2":
                Show_Menu.show_menu()               

            elif choice == "3":
                FoodService.update_food()

            elif choice == "4":
                FoodService.delete_food()

            elif choice == "5":
                break

            else:
                print("Invalid choice")