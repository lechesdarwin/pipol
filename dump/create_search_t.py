# -*- coding: utf-8 -*-

from concurrent.futures import ThreadPoolExecutor
import requests
from db import get_conn


conn = get_conn()
cursor = conn.cursor()
cursor.execute("SELECT id,contenido,categoria from content_t")
data = cursor.fetchall()


def e(data):
    cursor.execute("INSERT INTO search(id_f,texto,categoria)VALUES(%s,%s,%s)", (data[0], data[1], data[2]))
    if cursor.rowcount > 0:
        print("Realizado en el id",data[0])
    else:
        print("Error en el id",data[0])
    conn.commit()


executor = ThreadPoolExecutor(max_workers=4)

for d in data:
    e(d)
cursor.close()
conn.close()