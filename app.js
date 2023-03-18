const container = document.getElementById("container")
const gridSize = 16;

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