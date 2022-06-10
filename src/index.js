import './style.css';
import {bodyMaker} from './body.js';
import {headerMaker} from './header.js';
import {mainContent} from './main-content.js';
import {homeMaker} from './home.js';
import waluigi from './images/waluigi.jpeg';

const contentBody = bodyMaker();

document.body.appendChild(contentBody);

contentBody.appendChild(headerMaker());

const mainContentContainer = mainContent();

contentBody.appendChild(mainContentContainer);

const homeButton = document.querySelector(".home-tab");
homeButton.addEventListener("click", ()=>{
    console.log("Home");
});

const menuButton = document.querySelector(".menu-tab");
menuButton.addEventListener("click", ()=>{
    console.log("Menu");
});

const contactButton = document.querySelector(".contact-tab");
contactButton.addEventListener("click", ()=>{
    console.log("Contact");
});




