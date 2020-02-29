
from flask import render_template, request
from flask_mobility.decorators import mobile_template
from . import app
from .view.index import index_v
from .view.pita import pita_v

@app.route("/", methods=["GET"])
def index():
    data = index_v()
    print(data)
    return render_template("index.html")


@app.route("/pita/<string:url>")
@mobile_template('{mobile/}content.html')
def content(template, url):
    data = pita_v(url)
    print(data)
    return render_template(template)