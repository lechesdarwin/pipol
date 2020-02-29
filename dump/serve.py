from flask import Flask, request
from db import get_conn

app = Flask(__name__)

@app.route("/dump", methods=["POST"])
def dump():
    conn = get_conn()
    cursor = conn.cursor()
    data = request.json
    dat = []
    for k,v in data.items():
        dat.append(v)
    data = tuple(dat)
    query = """INSERT INTO content_t(contenido,categoria,fecha,img,external,link,tuit,pined) VALUES(%s,%s,%s,%s,%s,%s,%s,%s)"""
    cursor.execute(query,data)
    conn.commit()
    cursor.close()
    conn.close()
    print(request.json)
    return request.json

app.run()