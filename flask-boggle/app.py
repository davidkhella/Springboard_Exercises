from flask import Flask, request, render_template, redirect, session, jsonify
from boggle import Boggle

app = Flask(__name__)
app.config['SECRET_KEY'] = "diamond123"

boggle_game = Boggle()

@app.route('/')
def start_game():
    title = "Boggle Game"
    board = boggle_game.make_board()
    session['board'] = board

    return render_template('index.html', title=title, board=board)

@app.route('/check-word')
def check_word():

    word = request.args['word']
    board = session['board']
    response = boggle_game.check_valid_word(board, word)

    return jsonify({'result': response})

