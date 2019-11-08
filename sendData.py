import requests
import json
import time
import datetime
from random import randint


def sendData():

    url = "http://10.1.11.3:8000/api/input-data/"

    # Send data every 10s
    while True:
        now = datetime.datetime.strftime(datetime.datetime.now(), "%H:%M:%S")
        payload = {
            "data": {
                "name": now,
                "173.98.182.223": randint(0, 1000),
                "251.91.209.163": randint(0, 1000)
            }
        }
        r = requests.post(url, json=payload)
        print(r)
        time.sleep(10)


if __name__ == "__main__":
    sendData()
