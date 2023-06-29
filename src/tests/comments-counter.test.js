/**
 * @jest-environment jsdom
 */
import getCommentsCount from '../modules/comments-counter.js';

describe('Comments counter', () => {
  test('The function should return 0 for no comment', () => {
    document.body.innerHTML = `
      <ul class="comment-box">
      </ul>
    `;

    const commentsNumber = getCommentsCount();

    expect(commentsNumber).toBe(0);
  });

  test('Should return 5 for 5 elements', () => {
    document.body.innerHTML = `
      <ul class="comment-box">
        <li><span class="comment-item"></span></li>
        <li><span class="comment-item"></span></li>
        <li><span class="comment-item"></span></li>
        <li><span class="comment-item"></span></li>
        <li><span class="comment-item"></span></li>
      </ul>
    `;

    const commentsNumber = getCommentsCount();
    expect(commentsNumber).toBe(5);
  });
});