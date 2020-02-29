# -*- coding: utf-8 -*-
# import grequests
import pickle
# from concurrent.futures import ThreadPoolExecutor
import requests
def e(data):
    requests.post("http://127.0.0.1:5000/dump",json=data)


# executor = ThreadPoolExecutor(max_workers=4)

dat = []
with open("data.pkl","rb") as f:
    dat = pickle.load(f)

for d in dat:
    da = d.json(encoding="utf-8")
    print(da)
