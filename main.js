let hero = document.querySelector("#hero");
let backgroundWords = document.querySelector("#background-words");
let formInput = document.querySelector("#myForm input");

let colors = [
  "yellowgreen",
  "darkcyan",
  "crimson",
  "cornflowerblue",
  "gold",
  "goldenrod",
  "lightgoldenrodyellow",
  "#eee",
];

hero.addEventListener("mouseover", function () {
  let newColor = colors[Math.floor(Math.random() * colors.length)];
  formInput.style.color = newColor;
  backgroundWords.style.color = newColor;
  let div = document.createElement("div");
  createIndividualLetters(div);
});

formInput.addEventListener("keyup", function () {
  let divs = document.querySelectorAll("#background-words div");
  for (let div of divs) {
    createIndividualLetters(div);
  }
});

function createIndividualLetters(div) {
  let inputValue = formInput.value;
  div.innerHTML = "";
  for (let letter of inputValue) {
    let span = document.createElement("span");
    span.innerHTML = letter;
    div.appendChild(span);
  }
  backgroundWords.appendChild(div);
}
