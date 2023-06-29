const getCount = () => {
  const tagCount = document.querySelectorAll('.tag');
  if (tagCount.length < 30) {
    return tagCount.length;
  }
  return 'Error:too many reservations';
};

export default getCount;