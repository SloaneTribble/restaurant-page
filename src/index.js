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



