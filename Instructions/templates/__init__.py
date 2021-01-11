# flask application package

from flask import Flask
app = Flask(__name__)

def main():
    from . import views