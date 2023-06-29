import sendData from './send.js';
// Take the API endpoint and retrives data. return retrived data
const getData = async (url) => {
  const response = await fetch(url);
  let data = [];
  if (response.ok) {
    data = await response.json();
  }
  return data;
};

// renderpopup get the data from getData function and inject the popup templete with that data
const renderpopup = async (showid = 98) => {
  const container = document.getElementById('comment-popup-container');
  const mainUrl = `https://api.tvmaze.com/shows/${showid}`;
  const involvementUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/FjhFMUdws0lCxR3eXCdS/comments?item_id=${parseInt(showid, 10)}`;
  // Fetch data from API
  const data = await getData(mainUrl);
  const comments = await getData(involvementUrl);
  // Templete for the comment popup
  container.innerHTML = `
        <div class="blur"></div>
       <div class="comments-container animation-comment">
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
           <div class="comments">
             <div class="forms">
               <h3 class="heading"> Add a Comment </h3>
               <form>
                   <input class="input username" placeholder="Name" type="text"/> </br></br>
                   <textarea placeholder="Comment" class="input comment-message" name="comment" id="comment" cols="30" rows="7"></textarea>
                   <button class="add-comment-btn">Comment</button>
                 </form>
             </div>
             <div class="existingcomments">
                 <h2 class="heading">Comments()</h2>
                 <ul class="comment-box">
                 ${comments.map((tag) => `<li id="${data.id}"><span class="tag">${tag.creation_date} ${`${tag.username}: ${tag.comment}`}</span></li>`).join('')}
                 </ul>
             </div>
         </div>
         </div>
         `;

  // Add click event to the comment popup close icon
  const closeBtn = container.querySelector('.close');
  closeBtn.addEventListener('click', () => {
    container.innerHTML = '';
  });

  const addCommentBtn = document.querySelector('.add-comment-btn');

  // Add event for add comment button

  addCommentBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const nameElem = document.querySelector('.username');
    const commentElem = document.querySelector('.comment-message');
    const dataToSend = { item_id: data.id, username: nameElem.value, comment: commentElem.value };
    await sendData(dataToSend);
    await renderpopup(data.id);
    nameElem.value = '';
    commentElem.value = '';
  });
};

export default renderpopup;
