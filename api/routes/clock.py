import json
import time
import random
from flask import Flask
from flask import Blueprint
from datetime import datetime



city = Blueprint('city', __name__)

clock = Blueprint('clock',__name__)

@clock.route('/')
def get_time():
    return {'time' : time.ctime(time.time())}

#использование переменных в роуте
#@city.route('/<string:name>')
#def get_data(name):
#    return "Это город " + name