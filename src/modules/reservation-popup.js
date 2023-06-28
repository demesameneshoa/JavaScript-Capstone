const getReservation = async (url) => {
  const response = await fetch(url);
  let data = [];
  if (response.ok) {
    data = await response.json();
  }
  else
  console.log(response);
  return data;
};


const container = document.getElementById('popup');
const reservpopup = async (showid = 98) => {
  const involvementUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/FjhFMUdws0lCxR3eXCdS/reservations?item_id=${showid}`;
  // Fetch data from API
  const comments = await getReservation(involvementUrl);
  await fetch(`https://api.tvmaze.com/shows/${showid}`)
    .then((response) => response.json())
    .then((data) => {
      container.innerHTML = `
        <div class="reservation-container">
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
                    <input type="text" id="name" placeholder="Name"/></br>
                    <input type="text" id="startdate" placeholder="Start Date"/></br>
                    <input type="text" id="enddate" placeholder="End Date"/></br>
                    <button id="reserve-button">Reserve</button>
                  </form>
              </div>
              <div class="existing-reservations">
                  <h3>Reservations ()</h3>
                  <ul class="comment-box">
                 ${comments.map((tag) => `<li><span class="tag">${`${tag.date_start} to ${tag.date_end} by ${tag.username} `}</span></li>`).join('')}
                 </ul>
              </div>
          </div>
          </div>`;
      container.style.display = 'block';
    });
  const closeBtn = document.getElementById('closeBtn');
  closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    container.style.display = 'none';
  });
};

export default reservpopup;