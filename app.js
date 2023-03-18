const container = document.getElementById("container")
const gridSize = 16;

for (let i = 0; i < gridSize * gridSize; i++) {
  const square = document.createElement('div');
  square.classList.add('grid-square');
  container.appendChild(square);
}

const squares = document.querySelectorAll('.grid-square');

squares.forEach((square) => {
  square.addEventListener('mouseover', () => {
    square.style.backgroundColor = 'black';
  });
});

