let currentId = 0;
let moviesList = [];

$(function () {
    $('#movie-form').on('submit', function (e) {
        e.preventDefault();
        let movieTitle = $('#movie-title').val();
        let rating = $('#rating').val();
        let movieData = { movieTitle, rating, currentId };

        currentId++
        moviesList.push(movieData);

        $('#table-body ').append(`<tr><td>${movieTitle}</td><td>${rating}</td><td><button id="delete-btn">Delete</button></td></tr>`)

    })

    $('tbody').on('click', '#delete-btn', function (e) {
        let removeFromMoviesList = moviesList.findIndex(movie => movie.currentId === $(e.target).data('deleteId'));

        moviesList.splice(removeFromMoviesList, 1);

        $(e.target).closest('tr').remove();
    })
})

$(function () {
    const ths = $("th");
    let sortOrder = 1;

    ths.on("click", function () {
        const rows = sortRows(this);
        rebuildTbody(rows);
        updateClassName(this);
        sortOrder *= -1;
    })

    function sortRows(th) {
        const rows = $.makeArray($('tbody > tr'));
        const col = th.cellIndex;
        const type = th.dataset.type;
        rows.sort(function (a, b) {
            return compare(a, b, col, type) * sortOrder;
        });
        return rows;
    }

    function compare(a, b, col, type) {
        let _a = a.children[col].textContent;
        let _b = b.children[col].textContent;
        if (type === "number") {
            _a *= 1;
            _b *= 1;
        } else if (type === "string") {
            _a = _a.toLowerCase();
            _b = _b.toLowerCase();
        }

        if (_a < _b) {
            return -1;
        }
        if (_a > _b) {
            return 1;
        }
        return 0;
    }

    function rebuildTbody(rows) {
        const tbody = $("tbody");
        while (tbody.firstChild) {
            tbody.remove(tbody.firstChild);
        }
        for (let j = 0; j < rows.length; j++) {
            tbody.append(rows[j]);
        }
    }

    function updateClassName(th) {
        for (let k = 0; k < ths.length; k++) {
            ths[k].className = "";
        }
        th.className = sortOrder === 1 ? "asc" : "desc";
    }

});