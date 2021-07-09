window.onload = function () {
  changePixelBackgroundColor();
  inputValueRange();
  getPalleteEvent();
  getClearButtonEvent();
}
const slider = document.getElementById("board-size");
const grid = document.querySelector(".pixel-board");
const clearButton = document.querySelector("#clear-all");
const instruction = document.querySelector("#select-color");
const colors = document.querySelectorAll(".color");


function inputValueRange () {
  slider.oninput = function () {
    let value = parseInt(slider.value);
    let pixels = document.querySelectorAll(".pixel");
    console.log(`slider: ${value}`);
    value === 0 
    ? deletePixel(pixels.length)
    : createPixel(value)
    setInstruction(value);
  }
}

function createPixel(value) {
  for (let i = 0; i < value; i += 1) {
    let gridItem = document.createElement("div");
    gridItem.className = "pixel";
    grid.appendChild(gridItem);
  }
}

function deletePixel(value) {
  for (let i = 0; i < value; i++) {
    grid.lastElementChild.remove();
  }
}

function setInstruction(value) {
  if (value > 0) {
    instruction.innerHTML = "Escolha uma cor para pintar os pixels ou apague as cores aplicadas";
  } else {
    instruction.innerHTML = "";
  }
}

function getPalleteEvent () {
  for (let color of colors) {
    color.addEventListener("click", (evt) => {
      let className = evt.target.className;
      changePixelBackgroundColor(getPalleteColor(className));
    });
  }
}

function getPalleteColor (className) {
  switch (className) {
    case ("color orange"): return "orangered";
    case ("color yellow"): return "yellow";
    case ("color purple"): return "darkorchid";
    case ("color green"): return "chartreuse";
    case ("color blue"): return "dodgerblue";
    case ("erase"): return "black";
    default: return "aqua";
  }
}

function changePixelBackgroundColor (color) {
  document.addEventListener("click", (evt) => {
    let target = evt.target;
    if (target.className === "pixel") {
      target.style.backgroundColor = color;
    }
  })
}

function getClearButtonEvent() {
  clearButton.addEventListener("click", clearAllBackgroundColors);
}

function clearAllBackgroundColors(){
  let pixels = document.querySelectorAll(".pixel");
  for(let pixel of pixels) {
    pixel.style.backgroundColor = "black";
  }
}
