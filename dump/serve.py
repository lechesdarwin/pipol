import os
from flask import Flask, request, abort
import redis
from psycopg2.errors import UniqueViolation
from db import get_conn

r3 = redis.StrictRedis(host=os.getenv("REDIS_HOST"),db=3,port=int(os.getenv("REDIS_PORT")),password=os.getenv("REDIS_PASS"))
r2 = redis.StrictRedis(host=os.getenv("REDIS_HOST"),port=int(os.getenv("REDIS_PORT")),password=os.getenv("REDIS_PASS"),db=2)
app = Flask(__name__)

def dump_category(r, categorias, cursor):
    for cat in categorias:
        if r.get(cat):
            continue
        else:
            r.set(cat,1)
            cursor.execute("INSERT INTO categoria(categoria)VALUES(%s)",(cat,))
    

def view_controler(r, insert,cursor):
    idex_redis = r.get("index")
    if idex_redis == None:
        idex_redis = 0
        r.set("index",idex_redis)
    if int(idex_redis) > 200:
        r.set("index",0)
    idex_redis = int(idex_redis)
    title = insert[1]
    title = title.split("*$*")[0]
    cursor.execute("""UPDATE view SET id_f = %s,title = %s,categoria = %s,fecha = %s,img = %s, pined = %s, link = %s WHERE id = %s""",(insert[0],title,insert[2],insert[3],insert[4][0],insert[5],insert[6],idex_redis))
    if cursor.rowcount == 0:
        try:
            cursor.execute("""INSERT INTO view(id,id_f,title,categoria,fecha,img,pined,link)VALUES(%s,%s,%s,%s,%s,%s,%s,%s)""",(idex_redis,insert[0],title,insert[2],insert[3],insert[4][0],insert[5],insert[6]))
        except UniqueViolation:
            pass
    if cursor.rowcount >= 1:
        r.set("index",idex_redis + 1)

@app.route("/dump", methods=["POST"])
def dump():
    conn = get_conn()
    cursor = conn.cursor()
    data = request.json
    dat = []
    for k,v in data.items():
        dat.append(v)
    data = tuple(dat)
    try:
        query = """INSERT INTO content_t(contenido,categoria,fecha,img,external,link,tuit,pined) VALUES(%s,%s,%s,%s,%s,%s,%s,%s)RETURNING id,contenido,categoria,fecha,img,pined,link"""
        cursor.execute(query,data)
        returning = cursor.fetchone()
        dump_category(r3, returning[2], cursor)
        view_controler(r2, returning, cursor)
    except Exception as e:
        print(e)
        abort(500)
    conn.commit()
    cursor.close()
    conn.close()
    return "True", 200


app.run()
