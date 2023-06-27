import './style.css';
import render from './modules/fetch-movies.js';
import logo from './assets/logo-white.png';
import renderpopup from './modules/comment.js';

document.getElementById('logo-img').setAttribute('src', logo);
await render();

// Comment popup
const commentBtns = document.querySelectorAll('.comment-btn');

commentBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const { id } = btn.parentElement.parentElement;
    renderpopup(id);
  });
});
