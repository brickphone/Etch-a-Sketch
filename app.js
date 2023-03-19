const container = document.getElementById("container")
let gridSize = 16;

createGrid();

function createGrid() {
  for (let i = 0; i < gridSize * gridSize; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');
    container.appendChild(square);
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = 'black';
    });
  };
};

const button = document.getElementsByClassName("restart");

function restartPlay() {
  container.innerHTML = "";
  createGrid();
}

const sizeButton = document.querySelector(".size-selector");

sizeButton.addEventListener("click", changeGridSize);

function changeGridSize() {
  let newSize = prompt("Enter a size from 1-64");
  if (newSize === null) {
    return;
  }
  newSize = parseInt(newSize);
  if (isNaN(newSize) || newSize < 1 || newSize > 64) {
    alert("Invalid number selection! please try again");
    changeGridSize();
  } else {
    gridSize = newSize;
    container.innerHTML = "";
    createGrid();
  }
};