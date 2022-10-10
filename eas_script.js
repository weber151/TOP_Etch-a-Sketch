mainContainer = document.querySelector(".mainContainer");


function genGrid(a) {
    let toAdd = document.createDocumentFragment();
    for(let i = 0; i < a; i++){
        let newPxl = document.createElement('div');
        newPxl.classList.add('pxl');
        newPxl.id = 'r' + i;
        toAdd.appendChild(newPxl);
    }
    mainContainer.appendChild(toAdd);
}

genGrid(12);