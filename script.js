// default grid size
let gridWidth = 16;
let gridHeight = 16;

let container = document.querySelector(".grid-container");

function createGrid(width, height){
    //clear div-container
    while (container.firstChild) {
        container.remove(container.firstChild);
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

// create default grid
createGrid(gridWidth, gridHeight);


container.addEventListener("mouseover", (event) => {
    /*let target = event.target.id;*/
    let target = event.target;
    target.style.cssText = "background-color: black;";
});