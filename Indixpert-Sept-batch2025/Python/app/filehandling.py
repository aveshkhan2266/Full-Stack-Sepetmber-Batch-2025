import json 


file_patch = "data.json"

def read_file():
    try:
        with open(file_patch, "r") as file:
            return json.load(file)
        
    except:
        return []
    
def write_file(data):
    with open(file_patch, "w") as file:
        json.dump(data, file, indent=4)   



