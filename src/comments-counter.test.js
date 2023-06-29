/**
 * @jest-environment jsdom
 */
import getCommentsCount from './modules/comments-counter.js';

describe('Comments counter', () => {
  test('The function should return 0 for no comment', () => {
    document.body.innerHTML = `
      <ul class="comment-box">
      </ul>
    `;

    const commentsNumber = getCommentsCount();

    expect(commentsNumber).toBe(0);
  });
});