import './style.css';
import render from './modules/fetch-movies.js';
import logo from './assets/logo-white.png';
import renderpopup from './modules/comment.js';

document.getElementById('logo-img').setAttribute('src', logo);
await render();

// < Comment popup start
const commentBtns = document.querySelectorAll('.comment-btn');
// Add event to comment button
commentBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const { id } = btn.parentElement.parentElement;
    renderpopup(id);
  });
});

// Comment popup end >
