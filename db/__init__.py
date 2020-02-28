import psycopg2
import db.config as config


cfg = config.Config()
conn = psycopg2.connect(host="127.0.0.1", database=cfg.app_database, user=cfg.app_database_user, password=cfg.app_database_pass)