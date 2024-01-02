from flask import Flask, request, render_template
from unittest import TestCase

app = Flask(__name__)

@app.route('/hello')
def say_hello():
    """Shows hello page"""
    return render_template("hello.html")

def adder(x, y):
    return x + y

# assert adder(2, 5) == 7
# assert adder(2, 7) == 10

class AdditionTestCase(TestCase):
    """Examples of unit tests."""

    def test_adder(self):
        self.assertEqual(adder(2, 2), 4)