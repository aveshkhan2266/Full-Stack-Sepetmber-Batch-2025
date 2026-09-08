scores = {
    "Rahul": 85,
    "Priya": 92,
    "Aman": 78,
    "Sneha": 95
}

highest = 0
lowest = 100

highest_name = ""
lowest_name = ""

for i in scores:
    if scores[i] > highest:
        highest = scores[i]
        highest_name = i

    if scores[i] < lowest:
        lowest = scores[i]
        lowest_name = i

print("Highest Score Student =", highest_name)
print("Marks =", highest)

print("Lowest Score Student =", lowest_name)
print("Marks =", lowest)