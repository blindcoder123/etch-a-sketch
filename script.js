
let size = 16;
container.style.setProperty('grid-template-columns', 'repeat(' + size + ', 1fr)');
container.style.setProperty('grid-template-rows', 'repeat(' + size + ', 1fr)');

const rainbow = document.querySelector('input[value="rainbow"]');
const darken = document.querySelector('input[value="darken"]');

for(let i =0; i < size * size; i++) {
    const content = document.createElement('div');
    content.classList.add('con');

    content.addEventListener("mouseover",changeColor);

    
    container.appendChild(content);
    
};


function changeColor(e) {
    if (rainbow.checked) {
        e.target.style.backgroundColor = getRandomColor();
    } else if (darken.checked) {
        e.target.style.backgroundColor = rgb(0, 0, 0, 0.1);
    }
    else {
        e.target.style.backgroundColor = "blue";
    };
    
};

function resetGrid() {
    size = prompt("Select a grid size", 16);
    if (size != null) {
        if(size > 100) {
            size = 100;        
        }
    }
    document.getElementById("container").innerHTML = "";
    container.style.setProperty('grid-template-columns', 'repeat(' + size + ', 1fr)');
    container.style.setProperty('grid-template-rows', 'repeat(' + size + ', 1fr)');

    for(let i =0; i < size * size; i++) {
        const content = document.createElement('div');
        content.classList.add('con');
    
        content.addEventListener("mouseover",changeColor);
    
        
        container.appendChild(content);
        
    };

};

function getRandomColor() {
    let letters = '0123456789SBCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};












