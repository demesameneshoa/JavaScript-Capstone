const getCount = () => {
  const tagCount = document.querySelectorAll('.tag');
  return tagCount.length;
};

export default getCount;