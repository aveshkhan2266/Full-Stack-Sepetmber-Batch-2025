dicdata=[{
    "id":"101",
    "name":"avesh",
    "address":"jodhpur"
},
{
    "id":"102",
    "name":"ovesh",
    "address":"pali"
}]

name = input("whats your name: ")
school = input("whats your school name: ")
father = input("whats your father name: ")
mother = input("whats your mother name: ")

listdata = [name, school, father, mother]

dicdata.append({
    "name":name,
    "school":school,
    "father":father,
    "mother":mother
})

print("new list: ", listdata)


print("update list: ",dicdata)