from flask import Flask, request

app = Flask(__name__)

@app.route('/')
def say_hello():
    html = """
    <html>
        <body>
            <h1>HOMEPAGE</h1>
            <p>Welcome to my simple app powered by Flask.</p>
            <a href="/hello">Go to HELLO page</a>
        </body>
    </html>
    """
    return html

@app.route('/hello')
def hello():
    html = """
    <html>
        <body>
            <h1>HELLO!</h1>
            <p>This is fun!</p>
            <a href="/bye">Go to GOODBYE page</a>
        </body>
    </html>
    """
    return html

@app.route('/bye')
def bye():
    html = """
    <html>
        <body>
            <h1>GOODBYE!</h1>
            <p>Sad to see you go, let's do it again?</p>
            <a href="/">Go to HOMEPAGE page</a>
        </body>
    </html>
    """
    return html

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