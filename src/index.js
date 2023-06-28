import './style.css';
import render from './modules/fetch-movies.js';
import logo from './assets/logo-white.png';
import renderpopup from './modules/comment.js';
import { countLikes } from './modules/likes.js';
import sendData from './modules/send.js';

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

// < Comment popup start
const commentBtns = document.querySelectorAll('.comment-btn');
// Add event to comment button
commentBtns.forEach((btn) => {
  btn.addEventListener('click', async () => {
    const { id } = btn.parentElement.parentElement;
    await renderpopup(id);
    const addCommentBtn = document.querySelector('.add-comment-btn');
    // Add event for add comment button
    addCommentBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const username = document.querySelector('.username');
      const comment = document.querySelector('.comment-message');
      const dataToSend = { id, username, comment };
      sendData(dataToSend, id);
    });
  });
});



// Comment popup end >
