// Task 1 - Color Flipper

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

// Check for type of output - hex, rgb or simple
links.forEach((link) => {
  //   console.log(link); --- Testing for values
  link.addEventListener("click", (evt) => {
    let evtCL = evt.currentTarget.classList;
    // console.log(evtCL); --- Testing for values
    evtCL.add("active");
  });
});

// Event Listener for the Button to generate colors
btn.addEventListener("click", () => {
  links.forEach((link) => {
    if (link.classList.contains("active")) {
      //   console.log(link);
      if (link.classList.contains("hexCF")) {
        hexColor();
      } else if (link.classList.contains("rgbCF")) {
        rgbColor();
      } else {
        simpleColor();
      }
    } else {
      simpleColor();
    }
  });
});

// Function Declarations
function hexColor() {
  let colr = "#";
  for (i = 0; i < 6; i++) {
    colr += hex[randomColr(hex)];
  }
  textColor.textContent = colr;
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
