window.onload = function () {
  changePixelBackgroundColor();
  inputValueRange();
  getPalleteEvent();
  getClearButtonEvent();
}

function inputValueRange () {
  const slider = document.getElementById("board-size");
  slider.oninput = function () {
    const pixels = document.querySelectorAll(".pixel");
    let value = parseInt(slider.value);
    pixels.length >= value
      ? deletePixel(pixels.length - value)
      : createPixel(value)

    const instruction = document.querySelector("#select-color");
    if (value > 0) {
      instruction.innerHTML = "Escolha uma cor para pintar os pixels ou apague as cores aplicadas";
    } else {
      instruction.innerHTML = "";
    }
  }
}

function createPixel (value) {
  const grid = document.querySelector(".pixel-board");
  let gridItem = document.createElement("div");
  for (let i = 0; i < value; i += 1) {
    gridItem.className = "pixel";
    grid.appendChild(gridItem);
  }
}

function deletePixel (value) {
  const grid = document.querySelector(".pixel-board");
  for (let i = value; i > 0; i -= 1) {
    grid.lastElementChild.remove();
  }
}

function getPalleteEvent () {
  const colors = document.querySelectorAll(".color");
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
  const clearButton = document.querySelector("#clear-all");
  clearButton.addEventListener("click", clearAllBackgroundColors);
}

function clearAllBackgroundColors(){
  const pixels = document.querySelectorAll(".pixel");
  for(let pixel of pixels) {
    pixel.style.backgroundColor = "black";
  }
}
