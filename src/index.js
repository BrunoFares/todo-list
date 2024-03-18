import { renderLayout } from './layout.js';
import { generateDialog } from './dialog.js';
import './style.css';

renderLayout();

const btnAddItem = document.querySelector('button#addItem');

btnAddItem.addEventListener('click', () => { generateDialog(); });

const btn = document.querySelector('button');

btn.addEventListener('mouseover', function () {
    btn.style.backgroundColor = "rgb(100, 40, 40)";
});

btn.addEventListener('mouseout', function () {
    btn.style.backgroundColor = "rgb(79, 40, 40)";
});

btn.addEventListener('mousedown', function () {
    btn.style.backgroundColor = "rgb(120, 40, 40)";
});

btn.addEventListener('mouseup', function () {
    btn.style.backgroundColor = "rgb(100, 40, 40)";
});