import { renderLayout } from './layout.js';
import { generateDialog } from './dialog.js';
import './style.css';

renderLayout();

const btnAddItem = document.querySelector('button#addItem');

btnAddItem.addEventListener('click', () => { generateDialog(); });

const btn = document.querySelectorAll('button');

btn.forEach(item => {
    item.addEventListener('mouseover', function() {
        item.style.backgroundColor = "rgb(100, 40, 40)";
    })
});

btn.forEach(item => {
    item.addEventListener('mouseout', function() {
        item.style.backgroundColor = "rgb(79, 40, 40)";
    })
});

btn.forEach(item => {
    item.addEventListener('mousedown', function() {
        item.style.backgroundColor = "rgb(120, 40, 40)";
    })
});

btn.forEach(item => {
    item.addEventListener('mouseup', function() {
        item.style.backgroundColor = "rgb(100, 40, 40)";
    })
});