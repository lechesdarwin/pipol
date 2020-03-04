import psycopg2
from redis import StrictRedis
from .config import Config

cfg = Config()


def get_conn():
    """
    antes de llevar a prioccion acomodar los parametros para que s4ea mas fdinamico
    y seguro
    """
    # cfg = config.Config()
    return psycopg2.connect(host=cfg.host, database=cfg.app_database, \
        user=cfg.app_database_user, password=cfg.app_database_pass)


def dead(conn, cursor):
    conn.close()
    cursor.close()

def get_rconn(db):
    return StrictRedis(host=cfg.rhost,password=cfg.rpass,port=int(cfg.rport),db=db)


