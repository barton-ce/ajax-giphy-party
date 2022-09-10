const inputText = document.getElementById("source");
const $container = $("#container");
const form = document.getElementById("searchform");
const remove = document.querySelector("#remove");

function addGif(res) {
  let numResults = res.data.length;
  if (numResults) {
    let randomIdx = Math.floor(Math.random() * numResults);
    let $newCol = $("<div>", { class: "col-md-4 col-12 mb-4" });
    let $newGif = $("<img>", {
      src: res.data[randomIdx].images.original.url,
      class: "w-100",
    });
    $newCol.append($newGif);
    $container.append($newCol);
  }
}

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  let searchText = inputText.value;
  inputText.value = "";
  // console.log(searchText);
  const meme = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      api_key: "hKSR043e74YjOimGFgNvKVZg5gQ8wpNX",
      q: searchText,
      limit: 10,
    },
  });
  addGif(meme.data);
});

remove.addEventListener("click", function (e) {
  $container.empty();
});
