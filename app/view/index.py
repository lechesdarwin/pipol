from db import get_conn, dead


def index_v(limit=25):
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute("SELECT id,content,categoria,fecha,img FROM content_t limit {}".format(limit))
    data = [list(row) for row in cursor.fetchall()]
    dead(conn, cursor)
    return data