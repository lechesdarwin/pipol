from db import get_conn, dead
from flask import abort


def pita_v(id, limit=8):
    """return un diccionario con 2 claves
    main -> en el contenido completo del post
    her -> son los conidos relacionados
    """
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM content_t where id = %s", (id,))
    result = None
    try:
        result = list(cursor.fetchone())
    except TypeError:
        abort(404)
    except Exception:
        abort(404)
    if result:
        cursor.execute("SELECT id,link,contenido,img from content_t where id > {} limit {}".format(result[0],limit))
    data = {"main": result, "anclas": [list(row) for row in cursor.fetchall()]}
    dead(conn, cursor)
    return data
