const container = document.getElementById('popup');
const reservpopup = async (showid = 98) => {
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
                  <h3>Reservations (2)</h3>
                  <p>Alex Start Date: 10/10/23 End Date:12/10/23</p>
                  <p>Alex Start Date: 10/10/23 End Date:12/10/23</p>
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