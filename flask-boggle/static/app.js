class BoggleGame {
    constructor(boardId){
        this.words = new Set();
        this.board = $('#' + boardId)

        this.handleSubmit = this.handleSubmit.bind(this)

        $('#add-word', this.board).on('submit', this.handleSubmit);
    }

    handleSubmit(e){
        e.preventDefault();
        const $word = $('#word', this.board);

        let word = $word.val();
        // if (!word) return;

        
        console.log(word);
    }

    
}