class user:

    def __init__(self,email,password):
        self.email=email
        self.password=password

    def login(self):
        print(f"Login Successfully By {self.email}") 

    def sign_up(self):
        print("Thanks for registration")       

class customer(user):

    def add_to_cart(self):
        print("Add to cart:")

    def place_order(self):
        print("you have successfully orderd ")

class admin(user):
    def view_report(self):
        print("this is your report")

class sales(user):

    def add_product(self):
        print("you added product successfully")

print("+++===+++===+++ Admin Object +++===+++===+++") 

admin_ob=admin ("avesh@gmail.com","1234")
admin_ob.login()
admin_ob.view_report()

print("+++===+++===+++ customer Object +++===+++===+++") 

customer_ob=customer("khan@gmail.com","2121")
customer_ob.login()
customer_ob.add_to_cart()

print("+++===+++===+++ sales Object +++===+++===+++")

sales_ob=sales("ovesh@gmail.com","3434")
sales_ob.login()
sales_ob.add_product()