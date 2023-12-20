from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/hello')
def say_hello():
    """Shows hello page"""
    return render_template("hello.html")