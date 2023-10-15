// - Allow the user to search for a GIF and when the form is submitted, make an AJAX request to the Giphy API and return a single GIF
// - Once the Giphy API has responded with data, append the GIF to the page
// - Allow the user to search for as many GIFs as they would like and keep appending them to the page
// - Allow the user to remove all of the GIFs by clicking a button

const $gifArea = $("#gif-area");
const $searchInput = $("#search-field");

$("form").on("submit", async function (e) {
  e.preventDefault();

  let searchTerm = $searchInput.val();
  $searchInput.val("");

  const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: searchTerm,
      api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym",
    },
  });

  console.log(response.data);
  addGif(response.data);
});

function addGif(res) {
  let resDataLength = res.data.length;
  if (resDataLength) {
    let randomImgIndex = Math.floor(Math.random() * resDataLength);
    let $newDiv = $("<div>").addClass("col-sm-12 col-lg-4");
    let $newGifImg = $("<img>", {
      src: res.data[randomImgIndex].images.original.url,
    }).addClass("card-img m-1");
    $newDiv.append($newGifImg);
    $gifArea.append($newDiv);
  }
}

$("#delete-btn").on("click", function () {
  $gifArea.empty();
});

console.log("Let's get this party started!");
