import json
import os
class Handelfile:
    def load_json(file, default):
        if not os.path.exists(file):
            return default
        try:
            with open(file, "r") as f:
                return json.load(f)
        except:
            return default

    def save_json(file, data):
        os.makedirs(os.path.dirname(file), exist_ok=True)
        with open(file, "w") as f:
            json.dump(data, f, indent=4)
