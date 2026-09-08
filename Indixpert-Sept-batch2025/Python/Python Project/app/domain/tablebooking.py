from ..domain.handling import Handelfile
from ..model.path import Pathmodel

class TableService:

    @staticmethod
    def load_tables():
        tables = Handelfile.load_json(Pathmodel.TABLE, [])
        if not tables:
            print("No tables available. Please check table.json!")
        return tables

    @staticmethod
    def view_tables():
        tables = TableService.load_tables()
        if not tables:
            return

        booked = Handelfile.load_json(Pathmodel.BOOKED, [])

        print("\n--- TABLE LIST ---")
        for table in tables:
            status = "Booked" if any(
                b["table_no"] == table["table_no"] for b in booked
            ) else "Available"
            print(f"Table No: {table['table_no']} | Seats: {table['seats']} | Status: {status}")

    @staticmethod
    def book_table():
        tables = TableService.load_tables()
        if not tables:
            return

        booked = Handelfile.load_json(Pathmodel.BOOKED, [])

        print("\n--- TABLES ---")
        for table in tables:
            status = "Booked" if any(
                b["table_no"] == table["table_no"] for b in booked
            ) else "Available"
            print(f"Table No: {table['table_no']} | Seats: {table['seats']} | Status: {status}")

        try:
            choice = int(input("Enter Table No to book: "))
        except ValueError:
            print("Invalid table number")
            return

        table = next((t for t in tables if t["table_no"] == choice), None)
        if not table:
            print("Invalid table number")
            return

        if any(b["table_no"] == choice for b in booked):
            print("Table already booked")
            return

        booked.append({
            "table_no": table["table_no"],
            "seats": table["seats"]
        })

        Handelfile.save_json(Pathmodel.BOOKED, booked)
        print(f"\nTABLE {choice} BOOKED SUCCESSFULLY\n")

    @staticmethod
    def table_menu():
        while True:
            print("\n--- TABLE MENU ---")
            print("1. View Tables")
            print("2. Book Table")
            print("3. Back")

            choice = input("Choose option: ").strip()
            if choice == "1":
                TableService.view_tables()
            elif choice == "2":
                TableService.book_table()
            elif choice == "3":
                break
            else:
                print("Invalid option, try again")
