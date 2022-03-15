const container = document.querySelector('#container');

const content = document.createElement('div');

content.style.backgroundColor = 'black';
content.classList.add('content');
content.textContent = 'test';
container.appendChild(content);