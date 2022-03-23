
let size = 16;
for(let i =0; i < size * size; i++) {
    const content = document.createElement('div');
    content.classList.add('con');

    content.addEventListener("mouseover",changeColor);

    
    container.appendChild(content);
    
};


function changeColor(e) {
    e.target.style.backgroundColor = "blue";
}














