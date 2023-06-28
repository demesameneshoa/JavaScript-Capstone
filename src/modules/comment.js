const renderpopup = async (showid = 98) => {
  const container = document.getElementById('comment-popup-container');
  await fetch(`https://api.tvmaze.com/shows/${showid}`)
    .then((response) => response.json())
    .then((data) => {
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
         
         </div>`;

      const closeBtn = container.querySelector('.close');
      closeBtn.addEventListener('click', () => {
        container.innerHTML = '';
      });
    });
};

export default renderpopup;