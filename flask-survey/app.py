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

@app.route('/questions/<question_id>')
def questions(question_id):
    """Generates a new question id based on question index and addes it to url"""
    question = satisfaction_survey.questions[question_id].question   
    satisfaction_survey.questions[question_id].choices
    satisfaction_survey.questions[question_id].allow_text

    return render_template('question.html', question=question)

@app.route('/answer')
def answer():
    answer = request.form['answer']
    # Add to pretend DB
    responses.append(answer)
    flash('Added your answer', 'success')

    return redirect('/question/<question_id>')

@app.route('/thank-you')
def thank_you():
    """Sends user to thank you page when the length of the questions are answered"""
