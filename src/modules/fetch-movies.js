import reservpopup from './reservation-popup.js';

const url = 'https://api.tvmaze.com/shows';

// Fetches data from API
const getData = async () => {
  try {
    const response = await fetch(url); // Fetch data from api endpoints
    const data = await response.json(); // Change the data format to json
    return data;
  } catch (error) {
    return error.message;
  }
};

const render = async () => {
  const data = await getData();
  const topTen = data
    .sort((a, b) => b.rating.average - a.rating.average)
    .slice(0, 12);

  const tvShowsDiv = document.getElementById('tvShows');

  topTen.forEach((show) => {
    const poster = show.image ? show.image.medium : '';
    const title = show.name;
    const { id } = show;
    const showDiv = document.createElement('div');
    const posterImg = document.createElement('img');
    const icons = document.createElement('span');
    const titleContainer = document.createElement('div');
    posterImg.src = poster;
    showDiv.id = `${id}`;
    showDiv.classList.add('series');
    titleContainer.classList.add('div-title');
    titleContainer.innerHTML = `
      <h2>${title}</h2>
      <i class="fa-regular fa-heart"></i>
    `;
    icons.classList.add('span-icons');
    icons.innerHTML = `
      &nbsp; 
      <button><i class="fa-regular fa-comment"></i> Comment</button>
      &nbsp; 
      <button id="reserve"><i class="fa-regular fa-clock"></i> Reserve</button>`;

    showDiv.appendChild(posterImg);
    showDiv.appendChild(titleContainer);
    showDiv.appendChild(icons);
    tvShowsDiv.appendChild(showDiv);
  });
  const reserveBtn = document.querySelectorAll('#reserve');
  reserveBtn.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const showid = button.parentElement.parentElement.getAttribute('id');
      reservpopup(showid);
    });
  });
};

export default render;
