from ..domain.handling import Handelfile
from ..model.path import Pathmodel

class Show_Menu:
    @staticmethod
    def show_menu():
        default_menu = {}
        menu_data = Handelfile.load_json(Pathmodel.FOODMENU, default_menu)

        if not menu_data:
            print("Menu file is empty or not found!")
            return

        print("\n" + "="*70)
        print(" " * 20 + " Restaurant Menu")
        print("="*70 + "\n")

        for meal_time, categories in menu_data.items():
            print(f"--- {meal_time.upper()} ---\n")
            for cat in ["Veg", "Non-Veg"]:
                if cat in categories:
                    items = categories[cat]
                    print(f"{cat} Options:\n")
                    print(f"{'Item Name':<30} {'Full Price':<12} {'Half Price':<10}")
                    print("-" * 55)
                    for item in items:
                        name = item['name']
                        full_price = item['full']
                        half_price = item['half']
                        print(f"{name:<30} ₹{full_price:<10} ₹{half_price:<10}")
                    print("\n")
            print("="*70 + "\n")
