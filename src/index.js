import './style.css';
import render from './modules/fetch-movies.js';
import logo from './assets/logo-white.png';

document.getElementById('logo-img').setAttribute('src', logo);
render();
