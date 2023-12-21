from flask import Flask, request, render_template
from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)

app.config['SECRET_KEY'] = 'diamondgirl2021'

debug = DebugToolbarExtension(app)

app.route('/')
def form():
    return render_template('form.html')

app.route('/story')
def story():
    return render_template('story.html')