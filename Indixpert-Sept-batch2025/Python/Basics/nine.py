import datetime
import uuid
import json


listdata=[]
for i in range(5):
    studentdict={}
    studentdict["id"]=uuid.uuid4().hex[:13]
    studentdict["name"]=input("please enter your name: ")
    studentdict["date"]=datetime.datetime.now().strftime("%d-%m-%Y")
    listdata.append(studentdict)

print(json.dumps(listdata, indent=4))

