/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/danielcruz1')

.then((results) => {
  console.log(results);  
  return gitCard(results);
})

.catch(error => console.log(error))


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/


/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['jay-maas', 'shafi2019','angie0488', 'pedroescobedob', 'bigknell'];

  followersArray.forEach(follower => 
    axios.get(`https://api.github.com/users/${follower}`)
    
      .then((results) => {
        gitCard(results);
      })
      .catch(error => console.log(error))
  );

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

//  Elements & Style

function gitCard(data) {
  console.log(data);

  const div1 = document.createElement('div');  // class: card
  div1.classList.add('card');

  const img = document.createElement('img');        // image
  img.setAttribute('src', data.data.avatar_url)

  const div2 = document.createElement('div');   // class: card-info
  div2.classList.add('card-info');

  const h3 = document.createElement('h3');          //class: name
  h3.classList.add('name');
  h3.textContent = data.data.name;

  const p1 = document.createElement('p');       // class: username
  p1.classList.add('username');
  p1.textContent = data.data.login;

  const p2 = document.createElement('p');
  p2.textContent = 'Location: ' + data.data.location;

  const p3 = document.createElement('p');      // profile
  p3.textContent = 'Profile: ';
  p3.insertAdjacentHTML(
    "beforeend",
    `<a href=${data.data.html_url}>${data.data.html_url}</a>`
  );
  
  const p4 = document.createElement('p');       // followers
  p4.textContent = 'Followers: ' + data.data.followers;

  const p5 = document.createElement('p');       // following
  p5.textContent = 'Following: ' + data.data.following;

  const p6 = document.createElement('p'); 
  p6.textContent = 'Bio: ' + data.data.bio;
  

  console.log (div1);

//  Structure

const structureCard = document.querySelector('.cards');

structureCard.appendChild(div1);
div1.appendChild(img);
div1.appendChild(div2);
div2.appendChild(h3);
div2.appendChild(p1);
div2.appendChild(p2);
div2.appendChild(p3);
div2.appendChild(p4);
div2.appendChild(p5);
div2.appendChild(p6);

return structureCard;

}


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

