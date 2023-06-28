const countLikes = async (event) => {
  try {
    return await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/FjhFMUdws0lCxR3eXCdS/likes', {
      method: 'POST',
      body: JSON.stringify({
        item_id: `${event.target.parentNode.parentNode.parentNode.id}`,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  } catch (error) {
    return error.message;
  }
};

const retrieveLikes = async () => {
  try {
    return await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/FjhFMUdws0lCxR3eXCdS/likes', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json());
  } catch (error) {
    return error.message;
  }
};

export { countLikes, retrieveLikes };
