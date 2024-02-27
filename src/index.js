import printMe from './layout.js';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    const h1 = document.createElement('h1');

    h1.innerHTML = 'title thing';

    btn.innerHTML = 'Click me';
    btn.onclick = printMe;

    element.appendChild(btn);
    element.appendChild(h1);

    return element;
}

document.body.appendChild(component());