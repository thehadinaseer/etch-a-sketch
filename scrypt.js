// Adding a 16*16 Grid 
const container = document.querySelector("#container");
for (let i = 0; i < 256; i++) {
    const square = document.createElement('div');
    square.classList.add('gridSquare');
    container.appendChild(square);
};

// Filling a Square with Color 
const squares = document.querySelectorAll('.gridSquare');
squares.forEach(square => {
    square.addEventListener('mouseover', function () {
        square.style.backgroundColor = getRandomColor(); // or any color you like
    });
});

// Generating a Random a Color 
function getRandomColor() {
    // Generate random values for red, green, and blue
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // Convert the RGB values to a CSS color string
    return `rgb(${r}, ${g}, ${b})`;
}

// Creating New Grids from User Instructions
document.getElementById('newGridBtn').addEventListener('click', function () {
    let gridSize = prompt('Enter new grid size (max 100):');
    if (gridSize > 100) gridSize = 100;
    container.innerHTML = ''; // Clear existing grid
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    for (let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement('div');
        square.classList.add('gridSquare');
        container.appendChild(square);
    };
    addColoringEvent(); // Add event listeners to new squares
});

// Creating a Reset Button 
let resetBtn = document.getElementById('resetBtn').addEventListener('click', function () {
    const squares = document.querySelectorAll('.gridSquare');
    squares.forEach(square => {
        square.style.backgroundColor = ''; // Reset to default color
    });
});

