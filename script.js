const etcharea = document.querySelector("#etcharea");

const clearbutton = document.querySelector(".clear");

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
};


etcharea.addEventListener("mousedown", colorChange);

const color = document.querySelector("#color");

function colorChange(e) {
    if (e.target.classList.value === "cell") {
        console.log(e.target.classList.value)
        console.log(color.value)
        e.target.style.backgroundColor = color.value
    }
};