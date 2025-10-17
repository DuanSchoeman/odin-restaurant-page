import './style.css';
import { loadHome } from './script.js';
import { loadAbout } from './about.js';
import { loadMenu } from './menu.js';


const homeButton = document.getElementById('home-btn');
const menuButton = document.getElementById('menu-btn');
const aboutButton = document.getElementById('about-btn');

loadHome();

homeButton.addEventListener('click', function() {
    loadHome();
});

menuButton.addEventListener('click', function() {
    loadMenu();
});

aboutButton.addEventListener('click', function() {
    loadAbout();
});


