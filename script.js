// default grid size
let gridWidth = 16;
let gridHeight = 16;

let container = document.querySelector(".grid-container");
let gridBtn = document.querySelector(".grid-btn");
let blackWhiteBtn = document.querySelector(".black-and-white-btn");
let colorBtn = document.querySelector(".color-btn");
let blackAndWhite = true;
let color = false;


function createGrid(width, height){
    //clear div-container
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    //fill div-container
    for (let i = 0; i < height; i++) {
        let divRow = document.createElement("div");
        divRow.setAttribute("class", "div-row");
	    divRow.setAttribute("id", `div-row${i}`);
	    container.appendChild(divRow);
        for (let j = 0; j < width; j++) {
            let divColumn = document.createElement("div");
            divColumn.setAttribute("class", "div-column");
	        divColumn.setAttribute("id", `div-column${i}`);
	        divRow.appendChild(divColumn);
        } 
    }
}


function basicDrawing(target) {
    target.style.cssText = "background-color: black;";
}


function advancedDrawing(target) {
    if (target.style.backgroundColor == "") {
        let red = Math.round(Math.random() * 255);
        let green = Math.round(Math.random() * 255);
        let blue = Math.round(Math.random() * 255);
        target.style.cssText =`background-color: rgb(${red}, ${blue}, ${green});`;
        target.style.opacity = 0.1;
    } else {
        let opacity = target.style.opacity;
        opacity = Number(opacity) + 0.1;
        if (opacity > 1){
            opacity = 1;
        }
        let background = target.style.backgroundColor;
        target.style.cssText = `background-color: ${background}; opacity: ${opacity}`;
        opacity = target.style.opacity;
        background = target.style.backgroundColor;
    }
}


container.addEventListener("mouseover", (event) => {
    let target = event.target;
    if (color) {
        advancedDrawing(target);
    } else {
        basicDrawing(target);
    }
});


blackWhiteBtn.addEventListener("click", () => {
    color = false;
});


colorBtn.addEventListener("click", () => {
    color = true;
});


gridBtn.addEventListener("click", () => {
    do {
        alert("Width and height must be greater then 10 and less than 100.")
        gridWidth = prompt("Grid Width: ");
        gridHeight = prompt("Grid Height: ");
    }
    while (gridWidth < 10 || gridWidth > 100 || gridHeight < 10 || gridHeight > 100);
    
    createGrid(gridWidth, gridHeight);
});


// create default grid
createGrid(gridWidth, gridHeight);