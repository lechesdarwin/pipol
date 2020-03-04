from flask import abort
from db import dead, get_conn

def cat_v(name,limit=30):
    conn = get_conn()
    cursor = conn.cursor()
    q = f"select id,link,contenido,img from content_t where categoria IN ('{cat_name(name)}') order by id desc limit {limit}"
    try:
        cursor.execute(q)
    except Exception:
        #abort(404)
        pass
    # data = [list(row) for row in cursor.fetchall()]
    data = cursor.fetchall()
    dead(conn, cursor)
    return data


def cat_name(name):
    return "{"+name+"}"
