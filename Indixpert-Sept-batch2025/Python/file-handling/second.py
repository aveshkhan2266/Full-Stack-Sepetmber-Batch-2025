import json
import os

filepath=os.getcwd()
newfile=os.path.join(filepath,"file-handling","data.json")

# import json
# import os

# filepath=os.getcwd()
# newfile=os.path.join(filepath,"file-handling","data.json")
# print(newfile)

# with open(newfile,"r") as file:
#     data=json.load(file)
# print(data)

# import json
# import os

# filepath=os.getcwd()
# newfile=os.path.join(filepath,"file-handling","data.json")
# print(newfile)
dict={
    "name":input("enter your value "),
    "class":input("enter youe vaalue")
}
with open(newfile,"r") as file:
    data=json.load(file)
    print(data)

with open(newfile,"w") as file:
    newdict=dict
    data=json.dump(newdict,file,indent=4)
    # file.write(data)
    


