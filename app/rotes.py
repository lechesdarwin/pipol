
from flask import render_template, request, url_for, redirect
from flask_mobility.decorators import mobile_template
from . import app
from .view.index import index_v
from .view.pita import pita_v
from . import utils


@app.route("/", methods=["GET"])
def index():
    data = index_v()
    return render_template("index.html", data=data)


@app.route("/soga/<int:id>/<string:url>")
@mobile_template('{mobile/}content.html')
def content(template, id, url):
    limit = 14 if len(template.split("/")) == 1 else 8
    print(limit)
    main = pita_v(id, limit=limit)
    content = main["main"][1].split("*$*")
    title = content[0]
    content = content[1].split("*#*")
    content = [utils.fuente(utils.id_tuit_text_plain(cnt,main["main"][7])) for cnt in content]
    return render_template(template, id=main["main"][0], title=title, content=content, \
        categoria=main["main"][2], fecha=utils.date_parser(main["main"][3]), \
            img=main["main"][4], external=main["main"][5],\
                tuit=main["main"][7], anclas=main["anclas"])
