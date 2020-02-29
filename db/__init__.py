import psycopg2
# import db.config as config


def get_conn():
    """
    antes de llevar a prioccion acomodar los parametros para que s4ea mas fdinamico
    y seguro
    """
    # cfg = config.Config()
    return psycopg2.connect(host="127.0.0.1", database="content", user="scraper", password="scraperpass")


def dead(conn, cursor):
    conn.close()
    cursor.close()



