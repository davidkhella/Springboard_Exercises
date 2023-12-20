from flask import Flask, request, render_template
from flask_debugtoolbar import DebugToolbarExtension
from random import randint, choice, sample

app = Flask(__name__)

app.config['SECRET_KEY'] = 'diamondgirl2021'

debug = DebugToolbarExtension(app)

@app.route('/')
def hello():
    return render_template('home.html')

# @app.route('/hello')
# def hello():
#     html = """
#     <html>
#         <body>
#             <h1>HELLO!</h1>
#             <p>This is fun!</p>
#             <a href="/bye">Go to GOODBYE page</a>
#         </body>
#     </html>
#     """
#     return html

@app.route('/bye')
def bye():
    return render_template('bye.html')

@app.route('/search')
def search():
    term = request.args['term']
    return f"<h1>Search results for: {term}</h1>"

# @app.route("/post", methods=["POST"])
# def post_demo():
#     return "YOU MADE A POST REQUEST"

# @app.route("/post", methods=["GET"])
# def get_demo():
#     return "YOU MADE A GET REQUEST"

@app.route('/add-comment')
def add_comment_form():
    return """
        <h1>Add Comment</h1>
        <form method="POST"> 
            <input type='text' placeholder='comment' name='comment'/>   
            <button>Submit</button>
        </form 
    """
@app.route('/add-comment', methods=["POST"])
def save_comment():
    comment = request.form["comment"]
    return f"""
    <h1>SAVED YOUR COMMENT WITH TEXT OF {comment}</h1>
    """

@app.route('/r/<subreddit>')
def show_subreddit(subreddit):
    return f"<h1>Browsing the {subreddit} subreddit.</h1>"

@app.route('/r/<subreddit>/comments/<int:post_id>')
def show_comments(subreddit, post_id):
    return f"<p>Viewing comments from post_id: {post_id} from subreddit: {subreddit}"


POSTS = {
    1: "I like chicken tenders",
    2: "I hate trump",
    3: "The offspring all the way!",
    4: "Let's fuck"
}

@app.route('/posts/<int:id>')
def find_post(id):
    post = POSTS.get(id, "Post not found")
    return f"<p>{post}"


@app.route('/hello')
def say_hello():
    """Returns hello page"""
    return render_template('hello.html')

@app.route('/lucky')
def lucky_num():
    num = randint(1, 10)
    return render_template('lucky.html', lucky_num=num, msg="You are so lucky!")

@app.route('/form')
def show_form():
    return render_template('form.html')

COMPLIMENTS = ['cool', 'clever', 'tenacious', 'awesome', 'Pythonic']

@app.route('/greet')
def get_greeting():
    username = request.args['username']
    nice_thing = choice(COMPLIMENTS)
    return render_template('greet.html', username=username, compliment=nice_thing)

@app.route('/spell/<word>')
def spell_word(word):
    caps_word = word.upper()
    return render_template('spell_word.html', word=caps_word)

@app.route('/form-2')
def show_form2():
    return render_template('form-2.html')

@app.route('/greet-2')
def get_greeting2():
    username = request.args['username']
    wants = request.args.get('wants_compliments')
    nice_things = sample(COMPLIMENTS, 3)
    return render_template('greet-2.html', username=username, wants_compliments=wants, compliments=nice_things)