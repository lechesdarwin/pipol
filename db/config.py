import os

class Config(object):
    def __init__(self):
        self.app_token = os.getenv("TOKEN_APP")
        self.app_database = os.getenv("DB_APP")
        self.app_database_user =os.getenv("DB_USER_APP")
        self.app_database_pass = os.getenv("DB_PASS_APP")
        self.host = os.getenv("DB_HOST")
        self.rhost = os.getenv("REDIS_HOST")
        self.rpass = os.getenv("REDIS_PASS")
        self.rport = os.getenv("REDIS_PORT")

