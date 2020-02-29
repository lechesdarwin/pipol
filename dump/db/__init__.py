import psycopg2
import db.config as config


def get_conn():
    cfg = config.Config()
    return psycopg2.connect(host="127.0.0.1", database="content", user="scraper", password="scraperpass")


