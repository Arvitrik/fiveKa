//...................................................................
//.....................  Task 1 - Color Flipper .....................
//...................................................................

// UI Components

const textColor = document.querySelector(".span-color__cF");
const btn = document.querySelector(".btn__cF");
const bg = document.querySelector(".set-1");
const links = document.querySelectorAll(".cFOption");

// Color Selectors

const simple = [
  "aliceblue",
  "antiquewhite",
  "aqua",
  "aquamarine",
  "azure",
  "beige",
  "bisque",
  "blanchedalmond",
  "burlywood",
  "cadetblue",
];
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
const rgb = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// Function Declarations

function hexColor() {
  let colr = "#";
  for (i = 0; i <= 5; i++) {
    colr += hex[randomColr(hex)];
  }
  textColor.textContent = colr;
  // console.log(colr, textColor);
  bg.style.backgroundColor = colr;
}

function rgbColor() {
  let colr;
  for (i = 0; i < 6; i++) {
    colr = `rgb(${randomColr(255)},${randomColr(255)},${randomColr(255)})`;
  }
  textColor.textContent = colr;
  bg.style.backgroundColor = colr;
}

function simpleColor() {
  let colr = simple[randomColr(simple)];
  textColor.textContent = colr;
  bg.style.backgroundColor = colr;
}

let randomColr = (input) => {
  if (typeof input === "number") {
    return Math.floor(Math.random() * input);
  } else {
    return Math.floor(Math.random() * input.length);
  }
};

// Output format - hex, rgb or simple (default)

function optionActive(evt) {
  for (let i = 0; i < links.length; i++) {
    links[i].classList.remove("active");
    if (links[i].classList === evt.classList) evt.classList.add("active");
  }
}

// Just click on button

btn.addEventListener("click", (evt) => {
  evt.preventDefault(); // To prevent page refresh
  links.forEach((link) => {
    if (link.classList.contains("active")) {
      //   console.log(link, link.classList);
      if (link.classList.contains("hexCF")) {
        hexColor();
      } else if (link.classList.contains("rgbCF")) {
        rgbColor();
      } else if (link.classList.contains("simpleCF")) {
        simpleColor();
      }
    }
  });
});

//...................................................................
//.....................  Task 2 - Color Flipper .....................
//...................................................................
