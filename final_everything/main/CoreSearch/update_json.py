import json
import time
from datetime import datetime

def update_labs_json():
    # Define the updated lab data
    updated_data = [
        {
            "title": "Advanced Robotics Lab",
            "description": "Researching cutting-edge robotics and AI technologies.",
            "location": "Ritchie School of Engineering"
        },
        {
            "title": "Sustainability Research Center",
            "description": "Exploring sustainable solutions for environmental challenges.",
            "location": "College of Natural Science and Mathematics"
        },
        {
            "title": "Data Science Lab",
            "description": "Analyzing big data to uncover actionable insights.",
            "location": "Daniels College of Business"
        },
        {
            "title": "Health & Wellness Lab",
            "description": "Focusing on mental and physical health research.",
            "location": "College of Arts, Humanities, and Social Sciences"
        }
    ]

    # Add a timestamp to the data for proof of update
    # updated_data.append({
    #     "title": "Update Timestamp",
    #     "description": f"Last updated at {datetime.now()}",
    #     "location": "System"
    # })

    # Write the updated data to labs.json
    with open("labs.json", "w") as json_file:
        json.dump(updated_data, json_file, indent=4)
        print(f"labs.json updated at {datetime.now()}")

if __name__ == "__main__":
    while True:
        update_labs_json()
        time.sleep(10)  # Wait for 1 hour (3600 seconds) before updating again
