from flask import Flask, request, render_template, redirect, flash, jsonify
from flask_debugtoolbar import DebugToolbarExtension
from surveys import satisfaction_survey, personality_quiz, surveys

app = Flask(__name__)

app.config['SECRET_KEY'] = 'diamondgirl2021'
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

debug = DebugToolbarExtension(app)

responses = []

@app.route('/')
def survey_home():
    """Directs to survey page"""
    title = satisfaction_survey.title
    instructions = satisfaction_survey.instructions
    return render_template('survey.html', title=title, instructions=instructions)

@app.route('/begin', methods=['POST'])
def start_survey():

    return redirect('/questions/0')

@app.route('/questions/<int:question_id>')
def questions(question_id):
    """Generates questions for the survey"""
    if(responses is None):
        return redirect('/')
    
    if(len(responses) == len(satisfaction_survey.questions)):
        """Completed the survey"""
        return redirect('/thank-you')
    
    if(len(responses) != question_id):
        """Cannot skip questions"""
        flash(f'Invalid question id: {question_id}.')
        return redirect(f'/questions/{len(responses)}')

    question = satisfaction_survey.questions[question_id]

    return render_template('question.html', question_num=question_id, question=question)

@app.route('/answer', methods=['POST'])
def answer():
    choice = request.form['answer']
    # Add to pretend DB
    responses.append(choice)

    if(len(responses) == len(satisfaction_survey.questions)):
        return redirect('/thank-you')
    else:
        return redirect(f'/questions/{len(responses)}')

@app.route('/thank-you')
def thank_you():
    """Sends user to thank you page when the length of the questions are answered"""
    return render_template('thank-you.html')

