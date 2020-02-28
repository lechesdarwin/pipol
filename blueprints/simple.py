from flask import Blueprint
a = Blueprint("a",__name__,url_prefix="/e")

@a.route("/a",methods=['GET'])
def call():
    return "blue print"