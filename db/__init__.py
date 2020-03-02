import psycopg2
from .config import Config

cfg = Config()


def get_conn(host="localhost"):
    """
    antes de llevar a prioccion acomodar los parametros para que s4ea mas fdinamico
    y seguro
    """
    # cfg = config.Config()
    return psycopg2.connect(host=host, database=cfg.app_database, \
        user=cfg.app_database_user, password=cfg.app_database_pass)


def dead(conn, cursor):
    conn.close()
    cursor.close()



