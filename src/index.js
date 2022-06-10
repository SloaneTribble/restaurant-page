import './style.css';
import './home.js';
import waluigi from './images/waluigi.jpeg';

function component() {
const element = document.createElement('div');

// Lodash, now imported by this script
element.classList.add('hello');
element.textContent = "Sup";

return element;
}

document.body.appendChild(component());