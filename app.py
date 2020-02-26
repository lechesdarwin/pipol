from flask import Flask
from flask import render_template
from flask_mobility.mobility import Mobility
from flask_mobility.decorators import mobile_template


app = Flask(__name__)
Mobility(app)
@app.route("/")
def index():
    return render_template("index.html")

@app.route("/content")
@mobile_template('{mobile/}content.html')
def content(template):
    return render_template(template)