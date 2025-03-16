let container = document.getElementById("words");

function getWords() {
  let words = ["abcdefghijklmnopqrstuvxyz"];
  let letters = words[0].split("");
  for (let i = 0; i < letters.length; i++) {
    let btn = document.createElement("button");
    btn.innerText = letters[i];
    container.appendChild(btn);
  }
}
getWords();
