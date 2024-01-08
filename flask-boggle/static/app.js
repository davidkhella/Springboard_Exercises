class BoggleGame {
  constructor(boardId, secs = 60) {
    this.words = new Set();
    this.board = $("#" + boardId);
    this.score = 0;
    this.secs = secs;
    this.timer = setInterval(this.tick.bind(this), 1000);

    this.handleSubmit = this.handleSubmit.bind(this);

    $("#add-word", this.board).on("submit", this.handleSubmit);
    $("#reset-btn", this.board).on("click", this.handleReset);
  }

  showScore() {
    console.log(this.score);
    return $(".score", this.board).text(this.score);
  }

  showMessage(msg, cls) {
    $(".msg", this.board).text(msg).removeClass().addClass(`msg ${cls}`);
  }

  async handleSubmit(e) {
    e.preventDefault();
    const $word = $("#word", this.board);

    let word = $word.val();
    if (!word) return;

    if (this.words.has(word)) {
      this.showMessage(`Already found: ${word}`, "err");
      return;
    }

    const res = await axios.get("/check-word", {
      params: {
        word: word,
      },
    });

    if (res.data.result === "not-word") {
      this.showMessage(`${word} is not a valid word`, "err");
    } else if (res.data.result === "not-on-board") {
      this.showMessage(`${word} is not on the board`, "err");
    } else {
      this.showWord(word);
      this.score += word.length;
      this.showScore();
      this.words.add(word);
      this.showMessage(`Added: ${word}`, "ok");
    }

    $word.val("").focus();
  }

  showWord(word) {
    $("#words", this.board).append($("<li>", { text: word }));
  }

  showTimer() {
    $(".timer", this.board).text(this.secs);
  }

  async tick() {
    this.secs -= 1;
    this.showTimer();

    if (this.secs === 0) {
      clearInterval(this.timer);
      this.scoreGame();
    }
  }

  async scoreGame() {
    $("#add-word", this.board).hide();

    const res = await axios.post("/post-score", { score: this.score });
    if (res.data.brokeRecord) {
      this.showMessage(`New record: ${this.score}`, "ok");
    } else {
      this.showMessage(`Final score: ${this.score}`, "ok");
    }
  }


}

async function startNewGame() {
    location.reload();

}

$('#reset-btn').on('click', startNewGame);