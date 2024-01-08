from flask import Flask, request, render_template, redirect, session, jsonify
from boggle import Boggle

app = Flask(__name__)
app.config['SECRET_KEY'] = "diamond123"

boggle_game = Boggle()

@app.route('/')
def start_game():
    """Show board."""
    title = "Boggle Game"
    board = boggle_game.make_board()
    session['board'] = board
    highscore = session.get("highscore", 0)
    nplays = session.get("nplays", 0)

    return render_template('index.html', title=title, board=board, highscore=highscore, nplays=nplays)


@app.route('/check-word')
def check_word():
    """Check if word is in Boggle dictionary"""
    word = request.args['word']
    board = session["board"]
    response = boggle_game.check_valid_word(board, word)

    return jsonify({'result': response})

@app.route('/post-score', methods=["POST"])
def post_score():
    """Retrieve end score, update number of plays, update high score"""
    score = request.json["score"]
    print(score)
    highscore = session.get("highscore", 0)
    print(highscore)
    nplays = session.get("nplays", 0)
    print(nplays)

    session['nplays'] = nplays + 1
    session['highscore'] = max(score, highscore)

    return jsonify(brokeRecord=score > highscore)