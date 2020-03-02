from . import app 
from flask import g, url_for
import json


@app.template_filter()
def img_main(imgs):
    if len(imgs) > 1:
        g.imgs = imgs[1:]
    if imgs:
        return url_for("static", filename=imgs[0])

@app.template_filter()
def to_string(num):
    return str(num)


@app.template_filter()
def tmp_atext(text:str):
    return text.replace("-"," ")

@app.template_filter()
def title(title_text):
    """
    [0] id
    [1] link
    [2] contenido
    [3] img
    """
    return title_text.split("*$*")[0]
@app.template_filter()
def img(img_link):
    try:
        img = img_link[0]
    except IndexError:
        img = " "
    return img
    
