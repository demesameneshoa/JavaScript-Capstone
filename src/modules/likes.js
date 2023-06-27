const countLikes = async (event) => {
  try {
    return await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/FjhFMUdws0lCxR3eXCdS/likes', {
      method: 'POST',
      body: JSON.stringify({
        item_id: `${event.target.parentNode.parentNode.id}`,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  } catch (error) {
    return error.message;
  }
};

const retrieveLikes = async (id) => {
  try {
    const numberLikes = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/FjhFMUdws0lCxR3eXCdS/likes', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const totalLikes = numberLikes.find((obj) => obj.item_id === id);
    return totalLikes.likes;
  } catch (error) {
    return error.message;
  }
};

export { countLikes, retrieveLikes };
