function genGrid(a) {
    let tempGrid = document.createElement('div');
    mainGrid.appendChild(tempGrid);
    tempGrid.classList.add('grid');
    let toAdd = document.createDocumentFragment();
    for(let i = 0; i < a; i++){
        let newRow = document.createElement('div');
        newRow.classList.add('row');
        toAdd.appendChild(newRow);
        for(let i = 0; i < a; i++) {
            let newPxl = document.createElement('div');
            newPxl.classList.add('pxl');
            newPxl.id = 'r' + i;
            newRow.appendChild(newPxl);
        }
    }
    tempGrid.appendChild(toAdd);
    screenEffect();
}

function removeGrid() {
    grid = document.querySelector('.grid')
    grid.remove();
}

function screenEffect() {
    screen = document.querySelectorAll(".pxl");
    for (let x = 0; x < screen.length; x++) {
        screen[x].addEventListener("mouseenter", function(){
            screen[x].classList.toggle('pxlOn');
        })
    }
}

function gridInput(){
    return prompt("Number of pixels per side of grid: ", '25');
}

mainGrid = document.querySelector("body");
genGrid(25);

gridBtn = document.querySelector('.gridBtn');
gridBtn.addEventListener('click', function(){
    removeGrid();
    genGrid(gridInput());
})
