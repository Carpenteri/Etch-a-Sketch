const gridContainer = document.querySelector("#grid-container");
const resetButton = document.querySelector("#reset-button");
const clearButton = document.querySelector("#clear-button");
const defaultGridSize = 16;

setGrid(defaultGridSize);
resetButton.addEventListener("click", newSize);
clearButton.addEventListener("click", clearGrid);

function setGrid(size) {
    const gridSize = size * size;
    for (let i = 0; i < gridSize; i++) {
        const gridDiv = document.createElement("div");
        gridDiv.classList = "grid-div";
        gridDiv.addEventListener("mouseover", colorChange);
        gridContainer.appendChild(gridDiv);
    }
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}

function colorChange(color) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    color.target.style.backgroundColor = `rgb(${r},${g},${b})`;
}

function newSize() {
    let newGrid = prompt("What size you choose?");

    if ( newGrid !== null ) {
        newGrid = parseInt(newGrid);
        if (newGrid < 1 || newGrid > 64 || Number.isNaN(newGrid)) {
            alert("That's too big! Please choose number between 1-64");
            newSize();
        } else {
            removeGrid();
            setGrid(newGrid);
        }
    }
}

function removeGrid() {
    const grids = document.querySelectorAll(".grid-div");

    grids.forEach(grids => {
        gridContainer.removeChild(grids);
    });
}

function clearGrid() {
    const grids = document.querySelectorAll(".grid-div");

    grids.forEach(grids => {
        grids.style.backgroundColor = "transparent";
    });
}


