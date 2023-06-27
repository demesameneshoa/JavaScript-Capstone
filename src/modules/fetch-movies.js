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
    const actors = 'N/A';
    const rating = show.rating.average;
    const showDiv = document.createElement('div');
    const posterImg = document.createElement('img');
    const titleH2 = document.createElement('h2');
    const idP = document.createElement('p');
    const actorsP = document.createElement('p');
    const summaryP = document.createElement('p');
    const ratingP = document.createElement('p');
    const icons = document.createElement('span');
    posterImg.src = poster;
    titleH2.innerText = title;
    idP.innerText = `ID: ${id}`;
    actorsP.innerText = `Actors: ${actors}`;

    ratingP.innerText = `Rating: ${rating}`;
    icons.innerHTML = `<button><i class="fa-regular fa-heart"></i> Like</button> 
      &nbsp; 
      <button><i class="fa-regular fa-comment"></i> Comment</button>
      &nbsp; 
      <button><i class="fa-regular fa-clock"></i> Reserve</button>`;

    showDiv.appendChild(posterImg);
    showDiv.appendChild(titleH2);
    showDiv.appendChild(idP);
    showDiv.appendChild(actorsP);
    showDiv.appendChild(summaryP);
    showDiv.appendChild(ratingP);
    showDiv.appendChild(icons);
    tvShowsDiv.appendChild(showDiv);
  });
};

export default render;
