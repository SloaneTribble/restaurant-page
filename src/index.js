import './style.css';
import {homeMaker} from './home.js';
import {menu} from './menu.js';
import {contact} from './contact';
import{pageLoad} from './initial';

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




