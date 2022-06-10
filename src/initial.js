import {bodyMaker} from './body.js';
import {headerMaker} from './header.js';
import {mainContent} from './main-content.js';
import {homeMaker} from './home.js';
import {footer} from './footer';
import waluigi from './images/waluigi.jpeg';

// contentBody contains everything on the page


function pageLoad() {const contentBody = bodyMaker();

document.body.appendChild(contentBody);

contentBody.appendChild(headerMaker());

// mainContentContainer holds the home, menu or contact page

const mainContentContainer = mainContent();

contentBody.appendChild(mainContentContainer);

contentBody.appendChild(footer());

mainContentContainer.appendChild(homeMaker());}

export{pageLoad};