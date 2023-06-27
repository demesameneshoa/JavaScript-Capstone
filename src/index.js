import './style.css';
import render from './modules/fetch-movies.js';
import logo from './assets/logo-white.png';
import renderpopup from './modules/comment.js';

document.getElementById('logo-img').setAttribute('src', logo);
render();

// Comment popup

const commentBtns = document.querySelectorAll('.fa-comment');

commentBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    console.log(btn);
    const { id } = btn.parentElement;
    renderpopup(id);
  })
})
