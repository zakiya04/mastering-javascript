let container = document.getElementById("words");
let toGuess = document.getElementById("slashes");
let box = document.getElementById('main')
let canvas = document.getElementById("upper");
const ctx = canvas.getContext("2d")

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

let wrongGuess = 0

function getWord() {
  let words = ["abcdefghijklmnopqrstuvxyz"];
  let letters = words[0].split("");
  for (let i = 0; i < letters.length; i++) {
    let btn = document.createElement("button");
    btn.innerText = letters[i];
    btn.addEventListener("click", () => {
      handleClick(btn);
    });
    btn.classList.add("btn");
    container.appendChild(btn);
  }

  const random = wordList[Math.floor(Math.random() * wordList.length)];
  const div = document.createElement("div");
  div.classList.add("category");
  div.textContent = `Your word is in category: ${random.category}`;
  box.prepend(div);

  let word = random.names[Math.floor(Math.random() * random.names.length)].toLowerCase();
  for (let i = 0; i < word.length; i++) {
    let slash = document.createElement("p");
    slash.classList.add("slash");
    slash.innerText = word[i] === " " ? " " :"_";
    slash.id = word[i];
    toGuess.appendChild(slash);
  }
}
function handleClick(btn) {
  let found = false;

  const letter = btn.innerText;
  document.querySelectorAll('.slash').forEach((word) =>{
    if(word.id == letter){
      word.innerText = letter;
      found = true;
    }
  })
  if(!found){
    wrongGuess++;
    drawMan();
  }
}
function drawMan(){
  ctx.lineWidth = 2;
  ctx.strokeStyle = "black";
  const parts = [
    () => ctx.strokeRect(20, 150, 100, 10), // Base
    () => { ctx.beginPath(); ctx.moveTo(70, 150); ctx.lineTo(70, 20); ctx.stroke(); }, // Pole
    () => { ctx.beginPath(); ctx.moveTo(70, 20); ctx.lineTo(130, 20); ctx.stroke(); }, // Top Beam
    () => { ctx.beginPath(); ctx.moveTo(130, 20); ctx.lineTo(130, 40); ctx.stroke(); }, // Rope
    () => { ctx.beginPath(); ctx.arc(130, 50, 10, 0, Math.PI * 2); ctx.stroke(); }, // Head
    () => { ctx.beginPath(); ctx.moveTo(130, 60); ctx.lineTo(130, 100); ctx.stroke(); }, // Body
    () => { ctx.beginPath(); ctx.moveTo(130, 70); ctx.lineTo(120, 90); ctx.stroke(); }, // Left Arm
    () => { ctx.beginPath(); ctx.moveTo(130, 70); ctx.lineTo(140, 90); ctx.stroke(); }, // Right Arm
    () => { ctx.beginPath(); ctx.moveTo(130, 100); ctx.lineTo(120, 120); ctx.stroke(); }, // Left Leg
    () => { ctx.beginPath(); ctx.moveTo(130, 100); ctx.lineTo(140, 120); ctx.stroke(); } // Right Leg
  ];
  
  if(wrongGuess < parts.length) parts[wrongGuess]()
}
getWord();
