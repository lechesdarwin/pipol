from flask import Flask
from flask_mobility.mobility import Mobility
app = Flask(__name__)

from .rotes import *

Mobility(app)

# app.register_blueprint(a)
