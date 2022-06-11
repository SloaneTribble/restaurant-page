import './style.css';
import {homeMaker} from './home.js';
import {menu} from './menu.js';
import {contact} from './contact';

import{pageLoad} from './initial';

// The below code was moved to initial.js

// import {bodyMaker} from './body.js';
// import {headerMaker} from './header.js';
// import {mainContent} from './main-content.js';
// import {footer} from './footer';
// // contentBody contains everything on the page
// const contentBody = bodyMaker();

// document.body.appendChild(contentBody);

// contentBody.appendChild(headerMaker());

// // mainContentContainer holds the home, menu or contact page

// const mainContentContainer = mainContent();

// contentBody.appendChild(mainContentContainer);

// contentBody.appendChild(footer());

// mainContentContainer.appendChild(homeMaker());

pageLoad();


// Tabs will clear mainContentContainer and replace with relevant section material
const mainContentContainer = document.querySelector('.main-content');

const homeButton = document.querySelector(".home-tab");
homeButton.addEventListener("click", ()=>{
    console.log("Home");
    mainContentContainer.removeChild(mainContentContainer.firstElementChild);
    mainContentContainer.appendChild(homeMaker());
});

const menuButton = document.querySelector(".menu-tab");
menuButton.addEventListener("click", ()=>{
    console.log("Menu");
    mainContentContainer.removeChild(mainContentContainer.firstElementChild);
    mainContentContainer.appendChild(menu());

});

const contactButton = document.querySelector(".contact-tab");
contactButton.addEventListener("click", ()=>{
    console.log("Contact");
    mainContentContainer.removeChild(mainContentContainer.firstElementChild);
    mainContentContainer.appendChild(contact());
});




