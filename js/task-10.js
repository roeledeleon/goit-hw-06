function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector("#boxes");
const createBoxesBtn = document.querySelector("[data-create]");
const destroyBoxesBtn = document.querySelector("[data-destroy]");
const boxesInput = document.querySelector("#controls input");

function createBoxes(amount) {
  const arryBoxes = [];
  let boxSize = 30;

  for (let i = 0; i < amount; i++) {
    arryBoxes.push(document.createElement("div"));

    arryBoxes[i].style.width = `${boxSize}px`;
    arryBoxes[i].style.height = `${boxSize}px`;
    arryBoxes[i].style.backgroundColor = getRandomHexColor();

    boxSize += 10;
  }

  boxes.append(...arryBoxes);
}

function destroyBoxes() {
  while (boxes.firstChild) {
    boxes.removeChild(boxes.firstChild);
  }
}

createBoxesBtn.addEventListener("click", () => {
  createBoxes(boxesInput.value);
});
destroyBoxesBtn.addEventListener("click", () => {
  destroyBoxes();
});
