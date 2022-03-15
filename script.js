const etcharea = document.querySelector("#etcharea");

const div = "<div class=\"cell\"></div>";
const width = document.querySelector("#width");
const height = document.querySelector("#height");

let grid = `<div class="column">${div.repeat(width.value)}</div>`.repeat(height.value);

etcharea.innerHTML = grid;

function createGrid(){
    grid =`<div class="column">${div.repeat(width.value)}</div>`.repeat(height.value);
    return grid;
};

const submitbutton = document.querySelector(".submit");
submitbutton.addEventListener("mousedown", changeGrid);

function changeGrid(e) {
    const grid = createGrid();
    etcharea.innerHTML = grid;
    assignCellFunctions();
};

const color = document.querySelector("#color");
let cellDrag = false;

function colorChange(e) {
    if (e.target.classList.value === "cell" && cellDrag === true) {
        e.target.style.backgroundColor = color.value
    };
};

function cellMouseDown(e) {
    cellDrag = true;
    colorChange(e)
};

function cellMouseUp(e) {
    cellDrag = false;
};

const cellFunctions = [
    ["mousedown",cellMouseDown],
    ["mousemove",colorChange]
];


function assignCellFunctions(){
    const allCell =document.querySelectorAll(".cell")
    allCell.forEach(cell => {
        cellFunctions.forEach(cellfunction =>{
            cell.addEventListener(cellfunction[0], cellfunction[1]);
        });
    });
};

document.onmouseup = cellMouseUp;

assignCellFunctions();