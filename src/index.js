import { renderLayout } from './layout.js';
import { generateDialog } from './dialog.js';
import './style.css';

renderLayout();

const btn = document.querySelector('div#addItem');

btn.addEventListener('mouseover', function() {
    btn.style.backgroundColor = "rgb(100, 100, 100)";
})

btn.addEventListener('mouseout', function() {
    btn.style.backgroundColor = "rgb(78, 78, 78)";
})

btn.addEventListener('mousedown', function() {
    btn.style.backgroundColor = "rgb(120, 120, 120)";
})

btn.addEventListener('mouseup', function() {
    btn.style.backgroundColor = "rgb(100, 100, 100)";
})

btn.addEventListener('click', () => { generateDialog(); });