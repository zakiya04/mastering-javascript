let container = document.getElementById("words");
let toGuess = document.getElementById("slashes")

const wordList = [
  {
    category: "Movies",
    names: [
      "To Kill a Mockingbird",
      "Raiders of the Lost Ark",
      "Casablanca",
      "High Noon",
      "The Silence of the Lambs",
      "Rocky",
      "Aliens",
      "Lawrence of Arabia",
      "The Grapes of Wrath",
      "Star Wars",
    ],
  },
  {
    category: "Countries",
    names: [
      "China",
      "India",
      "United States",
      "Indonesia",
      "Brazil",
      "Pakistan",
      "Nigeria",
      "Bangladesh",
      "Russia",
      "Japan",
    ],
  },
  {
    category: "Mahabharata Characters",
    names: [
      "Abhimanyu",
      "Adhiratha",
      "Amba",
      "Ambalika",
      "Ambika",
      "Arjuna",
      "Ashwatthama",
      "Bharata",
      "Bhima",
      "Bhisma",
    ],
  },
  {
    category: "Game of Thrones Characters",
    names: [
      "Eddard Stark",
      "Catelyn Stark",
      "Robb Stark",
      "Sansa Stark",
      "Arya Stark",
      "Bran Stark",
      "Rickon Stark",
      "Jon Snow",
      "Benjen Stark",
      "Lyanna Stark",
    ],
  },
];

function getWords() {
  let words = ["abcdefghijklmnopqrstuvxyz"];
  let letters = words[0].split("");
  for (let i = 0; i < letters.length; i++) {
    let btn = document.createElement("button");
    btn.innerText = letters[i];
    btn.classList.add("btn");
    container.appendChild(btn);
  }
}
getWords();

function getRandomWord(){
  const random = wordList[Math.floor(Math.random() * wordList.length - 1)];
  
}