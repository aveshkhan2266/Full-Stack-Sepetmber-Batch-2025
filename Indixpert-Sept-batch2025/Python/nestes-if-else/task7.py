amount = int(input("Enter Your Value ="))

if (amount >= 500):
            
        note500 = amount // 500
        amount = amount - note500 * 500
        print("note 500 -: ",note500)
if (amount >= 200):
        note200 = amount // 200
        amount = amount - note200 * 200
        print("note 200 -: ",note200)
if (amount >= 50):
        note50 = amount // 50
        amount = amount - note50 * 50
        print("note 50 -: ",note50)
if (amount >= 20):
        note20 = amount // 20
        amount = amount - note20 * 20
        print("note 20 -: ",note20)
if (amount >= 10):
        note10 = amount // 10
        amount = amount - note10 * 10
        print("note 10 -: ",note10)

       