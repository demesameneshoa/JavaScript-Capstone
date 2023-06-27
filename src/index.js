import './style.css';
import render from './modules/fetch-movies.js';
import logo from './assets/logo-white.png';
import { countLikes } from './modules/likes.js';

document.getElementById('logo-img').setAttribute('src', logo);
await render();

const heartIcons = document.querySelectorAll('.fa-heart');

heartIcons.forEach((icon) => icon.addEventListener('click', countLikes));
