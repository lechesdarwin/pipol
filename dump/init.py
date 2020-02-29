import psycopg2
import os
# cambiar los paremetros dela contraseña antes de hacer cacadas
conn = psycopg2.connect(host="localhost", port = 5432, database="postgres", user="postgres", password=os.getenv("INIT_DB"))


cur = conn.cursor()

cur.execute("""CREATE ROLE scraper WITH LOGIN SUPERUSER PASSWORD 'scraperpass'""")
# conn.commit()
conn = psycopg2.connect(host="localhost", port = 5432, database="postgres", user="postgres", password=os.getenv("INIT_DB"))
cur = conn.cursor()
cur.execute("""CREATE DATABASE content ENCODING 'UTF-8' OWNER scraper""")
# conn.commit()

conn = psycopg2.connect(host="localhost", port = 5432, database="content", user="scraper", password=os.getenv("INIT_ROLE"))
cur.execute("""CREATE TABLE content_t(id serial primary key,contenido text,categoria varchar(65)[],fecha date,img varchar(255)[],external varchar(255)[],link varchar(180),tuit varchar(40)[],pined boolean default false)""")
# query_results = cur.fetchall()
# print(query_results)
conn.commit()
# Close the cursor and connection to so the server can allocate
# bandwidth to other requests
cur.close()
conn.close()
