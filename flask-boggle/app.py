from flask import Flask, request, render_template, redirect, session
from boggle import Boggle

app = Flask(__name__)
app.config['SECRET_KEY'] = "diamond123"

boggle_game = Boggle()

@app.route('/')
def start_game():
    title = "Boggle Game"
    board = boggle_game.make_board()
    return render_template('index.html', title=title, board=board)