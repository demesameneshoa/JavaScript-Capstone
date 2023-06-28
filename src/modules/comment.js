const getData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

// renderpopup takes the data from API and inject the popup templete with that data
const renderpopup = async (showid = 98) => {
  console.log(showid)
  const container = document.getElementById('comment-popup-container');
  const mainUrl = `https://api.tvmaze.com/shows/${showid}`;
  const involvementUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/FjhFMUdws0lCxR3eXCdS/comments?item_id=${parseInt(showid, 10)}`;
  // Fetch data from API
  const data = await getData(mainUrl);
  const comments = await getData(involvementUrl);
  // Templete for the comment popup
  container.innerHTML = `
        <div class="blur"></div>
       <div class="comments-container">
          <div><i class="fa-solid close fa-xmark"></i></div>
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
                 <li class="summary normal">Summary: ${data.summary}</li>
               </ul>
             </div>
           </div> 
           </div> 
           
         </div>
         `;

  // Add click event to the comment popup close icon
  const closeBtn = container.querySelector('.close');
  closeBtn.addEventListener('click', () => {
    container.innerHTML = '';
  });
};

export default renderpopup;