from flask import Flask, request, render_template, redirect, flash, jsonify
from flask_debugtoolbar import DebugToolbarExtension
from surveys import satisfaction_survey, personality_quiz, surveys

app = Flask(__name__)

app.config['SECRET_KEY'] = 'diamondgirl2021'
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

debug = DebugToolbarExtension(app)

responses = []

@app.route('/')
def start_survey():
    """Directs to survey page"""
    title = satisfaction_survey.title
    instructions = satisfaction_survey.instructions
    return render_template('survey.html', title=title, instructions=instructions)

@app.route('/questions/<question_num>')
def questions():
    satisfaction_survey.questions[0].question   
    satisfaction_survey.questions[0].question
    satisfaction_survey.questions[0].question

    return render_template('question.html', question=question)