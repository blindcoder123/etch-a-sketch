const container = document.querySelector('#container');

const content = document.createElement('div');

content.style.backgroundColor = 'black';
content.style.border = "thick solid red";
content.style.width = "100px";
content.style.height = "100px";


content.classList.add('content');
content.textContent = " ";
const fragment = new DocumentFragment();

for(let i =0; i < 256; i++) {
    fragment.appendChild(content.cloneNode(true));
    
}

container.appendChild(fragment);

const hoverContent = document.getElementById('div');


function hover(element, className) {
    element.addEventListener('mouseenter', e => element.classList.add(className));
    element.addEventListener('mouseleave', e => element.classList.remove(className));
}
hover(document.querySelector('.content'), 'hoverContent')







