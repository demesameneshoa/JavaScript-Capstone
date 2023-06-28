import './style.css';
import render from './modules/fetch-movies.js';
import logo from './assets/logo-white.png';
import { countLikes } from './modules/likes.js';

document.getElementById('logo-img').setAttribute('src', logo);
await render();

const heartIcons = document.querySelectorAll('.fa-heart');

heartIcons.forEach((icon) => icon.addEventListener('click', (event) => {
  countLikes(event);
  // Selects the span element next to the icon.
  const span = event.target.nextElementSibling;
  // Retrieves the number of likes and increment it by 1.
  let count = Number(span.textContent.replace('likes', ''));
  span.textContent = `${count += 1} likes`;
}));
