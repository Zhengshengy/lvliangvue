from flask import Flask,request
import numpy
import cv2
import re
import pandas

app=Flask(__name__)
@app.route("/api/photo",methods=["POST"])
def index():
  print(request.form["url"])
  print(request.form["name"])

app.run();
