from app.model.path import Pathmodel
from app.domain.handling import Handelfile

class FoodService:

    @staticmethod
    def add_food():
        menu = Handelfile.load_json(Pathmodel.FOODMENU, {})

        meal = input("Enter meal (Breakfast/Lunch/Dinner): ").title()
        category = input("Enter category (Veg/Non-Veg): ").title()

        if meal not in menu or category not in menu[meal]:
            print("Invalid meal or category")
            return

        name = input("Enter food name: ")
        full = int(input("Enter full price: "))
        half = int(input("Enter half price: "))

        menu[meal][category].append({
            "name": name,
            "full": full,
            "half": half
        })

        Handelfile.save_json(Pathmodel.FOODMENU, menu)
        print("Food added successfully")


    @staticmethod
    def view_food():
        menu = Handelfile.load_json(Pathmodel.FOODMENU, {})

        if not menu:
            print("No food found")
            return

        print("\n=========== FOOD MENU ===========")

        for meal, categories in menu.items():
            print(f"\n--- {meal.upper()} ---")
            for category, items in categories.items():
                print(f"\n{category}:")
                for item in items:
                    print(f"  {item['name']} | Full: ₹{item['full']} | Half: ₹{item['half']}")

    @staticmethod
    def update_food():
        menu = Handelfile.load_json(Pathmodel.FOODMENU, {})

        food_name = input("Enter food name to update: ").strip().lower()

        for meal in menu:
            for category in menu[meal]:
                for item in menu[meal][category]:
                    if item["name"].lower() == food_name:
                        item["name"] = input("New name: ")

                        try:
                            item["full"] = int(input("New full price: "))
                            item["half"] = int(input("New half price: "))
                        except ValueError:
                            print("Price must be a number")
                            return

                        Handelfile.save_json(Pathmodel.FOODMENU, menu)
                        print("Food updated successfully")
                        return

        print("Food not found")
                

    @staticmethod
    def delete_food():
        menu = Handelfile.load_json(Pathmodel.FOODMENU, {})

        food_name = input("Enter food name to delete: ").strip().lower()

        for meal in menu:
            for category in menu[meal]:
                items = menu[meal][category]
                for item in items:
                    if item["name"].lower() == food_name:
                        items.remove(item)
                        Handelfile.save_json(Pathmodel.FOODMENU, menu)
                        print("Food deleted successfully")
                        return

        print("Food not found")
