function screenEffect() {
    screen = document.querySelectorAll(".pxl");
    for (let x = 0; x < screen.length; x++) {
        screen[x].addEventListener("mouseenter", function(){
            screen[x].classList.toggle('pxlOn');
        })
    }
}

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
}

function removeGrid() {
    grid = document.querySelector('.grid')
    grid.remove();
}


function gridInput(){
    let userInput = prompt("Number of pixels per side of grid (2-150): ", '50');
    while (userInput > 150 && userInput < 2){
        userInput = prompt("Number of pixels per side of grid (2-150): ", '50')

    }
    return userInput;
}

mainGrid = document.querySelector("body");
genGrid(50);
screenEffect();

gridBtn = document.querySelector('.gridBtn');
gridBtn.addEventListener('click', function(){
    removeGrid();
    genGrid(gridInput());
    screenEffect();
})
