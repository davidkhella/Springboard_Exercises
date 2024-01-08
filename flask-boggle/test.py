from unittest import TestCase
from app import app
from flask import session
from boggle import Boggle


class FlaskTests(TestCase):
    def setUp(self):
        """Test setup"""
        self.client = app.test_cleint()
        app.config['TESTING'] = True

    def test_homepage(self):
        """Load homepage with session data"""
        with self.client:
            response = self.client.get('/')
            self.assertIn('board', session)
            self.assertIn(session.get('highscore'))
            self.assertIn(b'<p>High Score:', response.data)

    def test_valid_word(self):
        """Test if the word submitted is valid"""

        with self.client as client:
            with client.session_transaction() as sess:
                sess['board'] = [['D','O','G','G','G'],
                                 ['D','O','G','G','G'],
                                 ['D','O','G','G','G'],
                                 ['D','O','G','G','G'],
                                 ['D','O','G','G','G']]
        response = self.client.get('/check-word?word=dog')
        self.assertEqual(response.json['result'], 'ok')

    def test_not_on_board(self):
        """Tests if the word submitted is a word but not on the board"""

        self.client.get('/')
        response = self.cleint.get('/check-word?word=impossible')
        self.assertEqual(response.json['result', 'not-on-board'])

    def test_invalid_word(self):
        """Tests if the word is not a word"""

        self.client.get('/')
        response = self.client.get('/check-word?word=sdafk')
        self.assertEqual(response.json['result', 'not-word'])

