from flask import Flask
from flask import Blueprint
from flask_cors import CORS, cross_origin
from routes.clock import clock

def create_app():
    app = Flask(__name__)
    CORS(app)
    app.register_blueprint(clock, url_prefix='/time') 
    return app