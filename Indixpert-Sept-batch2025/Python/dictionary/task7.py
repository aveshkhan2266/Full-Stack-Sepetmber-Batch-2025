dict1 = {"a":10, "b":20, "c":30}
dict2 = {"b":40, "d":50}
dict3={}

for k,v in dict1.items():
    dict3[k]=v

for k,v in dict2.items():
    if k in dict3:
         dict3[k]=[dict3[k],v]
    else:
        dict3[k]=v    

print(dict3)
