
from flask import render_template, request, url_for, redirect, g
from flask_mobility.decorators import mobile_template
from time import strftime
from . import app
from .view.index import index_v
from .view.pita import pita_v
from . import utils
from .view.cat import cat_v
from db import get_conn, get_rconn


@app.before_request
def categoria():
    r = get_rconn(3)
    if strftime("%H") == "00":
        try:
            c = get_conn()
            cur = c.cursor()
            cur.execute("SELECT * from categoria")
            dcat = dict()
            cat = cur.fetchall()
            for k,v in cat.items():
                dcat[k] = v.encode("utf-8")
            r.hmset("categoria",dcat)    
        except Exception:
            pass
    else:
        c = list()
        tmp = r.hgetall("categoria")
        for k,v in tmp.items():
            c.append(v.decode("utf-8"))
        g.categorias = c    
        

@app.route("/", methods=["GET"])
def index():
    data = index_v()
    return render_template("index.html", data=data)


@app.route("/soga/<int:id>/<string:url>")
@mobile_template('{mobile/}content.html')
def content(template, id, url):
    limit = 14 if len(template.split("/")) == 1 else 8
    main = pita_v(id, limit=limit)
    content = main["main"][1].split("*$*")
    title = content[0]
    content = content[1].split("*#*")
    content = [utils.fuente(utils.id_tuit_text_plain(cnt,main["main"][7])) for cnt in content]
    return render_template(template, id=main["main"][0], title=title, content=content, \
        categoria=main["main"][2], fecha=utils.date_parser(main["main"][3]), \
            img=main["main"][4], external=main["main"][5],\
                tuit=main["main"][7], anclas=main["anclas"])


@app.route("/search")
def search():
    return render_template("search.html")


@app.route("/show/<string:name>")
def show_cat(name):
    return render_template("categorias.html",data=cat_v(name))