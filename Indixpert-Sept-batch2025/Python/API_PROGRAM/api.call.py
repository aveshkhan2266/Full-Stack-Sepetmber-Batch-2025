import requests
import json

class ApiClient:
    def __init__(self, url):
        self.url = url

    def get_data(self):
        response = requests.get(self.url)
        return response.json()


api = ApiClient("https://openlibrary.org/search.json?q=crime+and+punishment&fields=key,title,author_name,editions")
data = api.get_data()
print(json.dumps(data, indent=4))       

