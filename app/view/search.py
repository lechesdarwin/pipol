from db import get_conn, dead


def result(search):
    """id id_f texto categoria"""
    res = get_conn()
    cursor = res.cursor()
    try:
        q = "SELECT * FROM search WHERE texto @@ to_tsquery(\'{}\') limit 10".format(search)
        cursor.execute(q)
        data = cursor.fetchall()
    except Exception:
        return None
    dead(res, cursor)
    return data
