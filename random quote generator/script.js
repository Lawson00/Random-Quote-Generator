let showQuote = document.getElementById("quote");
let generateBtn = document.getElementById("generate_btn");
let showAuthor = document.querySelector("#author");
let authors;

let quotes = {
  " Ally Carte": `“Insane means fewer cameras!”`,
  " Christopher Paolini": `"“Never ask an elf for help; they might decide your better off dead, eh?"`,
  " Dan Brown": `“Act first, explain later.”`,
  " Tove Jansson": `“It looks rather ordinary," said the Snork. "Unless you consider that a top hat is always somewhat extraordinary, of course.”`,
};
function generate() {
  let authors = Object.keys(quotes);
  console.log(authors);

  let author = authors[Math.floor(Math.random() * authors.length)];
  console.log(author);

  let quote = quotes[author];
  console.log(quote);

  showAuthor.innerHTML = `― ${author}`;
  showQuote.innerText = quote;
}
generateBtn.addEventListener("click", (event) => {
  generate();
});
