import getCount from './reservation-counter.js';

const getReservation = async (url) => {
  const response = await fetch(url);
  let data = [];
  if (response.ok) {
    data = await response.json();
  }
  return data;
};
let addReservation;
const container = document.getElementById('popup');
const reservpopup = async (showid = 98) => {
  const involvementUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/FjhFMUdws0lCxR3eXCdS/reservations?item_id=${showid}`;
  // Fetch data from API
  const reservations = await getReservation(involvementUrl);
  await fetch(`https://api.tvmaze.com/shows/${showid}`)
    .then((response) => response.json())
    .then((data) => {
      container.innerHTML = `
        <div class="reservation-container animation-comment">
        <span id="closeBtn" class="close-button">&times;</span>
          <div class=info-wrapper>
          <div class="poster-container">
              <img src="${data.image.medium}" alt="" />
            </div>
            <div class="details-container">
              <div class="details-box">
                <h2 class="show-title heading">${data.name}</h2>
                <ul>
                  <li class="genresj normal">
                    Genres: ${data.genres}
                  </li>
                  <li class="language normal">Language: ${data.language}</li>
                  <li class="rating normal">IMDb Rating: ${data.rating.average}</li>
                  <li class="summary normal">Language: ${data.summary}</li>
                </ul>
              </div>
            </div> 
            </div> 
          <div class="reservations">
              <div class="forms">
                <h3> Add a reservation </h3>
                <form>
                    <input type="text" id="name" placeholder="Name" required /></br>
                    <input type="text" id="startdate" placeholder="Start Date" required /></br>
                    <input type="text" id="enddate" placeholder="End Date" required /></br>
                    <button id="reserve-button">Reserve</button>
                  </form>
              </div>
              <div class="existing-reservations">
                  <h3 id="reservation-header"></h3>
                  <ul class="comment-box">
                 ${reservations.map((reservation) => `<li><span class="tag">${`${reservation.date_start} to ${reservation.date_end} by ${reservation.username} `}</span></li>`).join('')}
                 </ul>
              </div>
          </div>
          </div>`;
      // count reservation tags and display in h3 header
      const reservationCount = getCount();
      const reservationTitle = document.getElementById('reservation-header');
      reservationTitle.innerText = (`Reservations (${reservationCount})`);
      container.style.display = 'block';
    });
  const closeBtn = document.getElementById('closeBtn');
  closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    container.style.display = 'none';
  });

  const reserveBtn = document.getElementById('reserve-button');
  reserveBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const user = document.getElementById('name');
    const startDate = document.getElementById('startdate');
    const endDate = document.getElementById('enddate');
    if (user.value !== '' && startDate.value !== '' && endDate.value !== '') {
      const newurl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/FjhFMUdws0lCxR3eXCdS/reservations/';
      addReservation(newurl, showid, user.value, startDate.value, endDate.value);
    }
  });
};

addReservation = async (url, showid, user, startDate, endDate) => {
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: showid,
      username: user,
      date_start: startDate,
      date_end: endDate,
    }),
  });
  reservpopup(showid);
};

export {
  reservpopup,
  getReservation,
};
