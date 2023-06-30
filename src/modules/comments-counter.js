const getCommentsCount = () => {
  const commentElem = document.querySelectorAll('.comment-item');
  return commentElem.length;
};

export default getCommentsCount;