const check = document.querySelector(".check");
const next = document.querySelector(".next");
const validWord = document.querySelector("input");
const point = document.querySelector(".points-value");
const guessWord = document.querySelector(".guess-word");
const timer = document.querySelector(".timer-value");
const info = document.querySelector(".info");

const scrambleWord = (word) => {
  let caractere = word.split("");
  for (let i = caractere.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = caractere[i];
    caractere[i] = caractere[j];
    caractere[j] = temp;
  }
  return caractere.join("").toUpperCase();
};

words = [
  {
    scrumble: scrambleWord("tastatura"),
    correct: "tastatura",
  },
  {
    scrumble: scrambleWord("copac"),
    correct: "copac",
  },
  {
    scrumble: scrambleWord("telefon"),
    correct: "telefon",
  },
  {
    scrumble: scrambleWord("sticla"),
    correct: "sticla",
  },
  {
    scrumble: scrambleWord("priza"),
    correct: "priza",
  },
  {
    scrumble: scrambleWord("elefant"),
    correct: "elefant",
  },
  {
    scrumble: scrambleWord("ventilator"),
    correct: "ventilator",
  },
  {
    scrumble: scrambleWord("parfum"),
    correct: "parfum",
  },
  {
    scrumble: scrambleWord("gantere"),
    correct: "gantere",
  },
  {
    scrumble: scrambleWord("poster"),
    correct: "poster",
  },
  {
    scrumble: scrambleWord("cerneala"),
    correct: "cerneala",
  },
  {
    scrumble: scrambleWord("cana"),
    correct: "cana",
  },
  {
    scrumble: scrambleWord("harta"),
    correct: "harta",
  },
];

//Buttons and Points
let x = 0;
let puncte = 0;
let timp = 100;
let start = false;

guessWord.innerHTML = words[x].scrumble;
check.addEventListener("click", () => {
  if (validWord.value === words[x].correct) {
    x++;
    puncte++;
    guessWord.innerHTML = words[x].scrumble;
    validWord.value = "";
    point.innerHTML = puncte;
  }
});
next.addEventListener("click", () => {
  x++;
  guessWord.innerHTML = words[x].scrumble;
  validWord.value = "";
});

validWord.addEventListener("click", () => {
  if (start === false) {
    info.style.visibility = "hidden";
    start = true;
    for (let i = 0; i <= 100; i++) {
      setTimeout(() => {
        timer.innerHTML = timp + "s";
        timp--;
      }, 1000 * i);
    }
  }
});
