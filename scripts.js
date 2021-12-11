let theFacts = [
  'Most american kitchens are 110sqft.',
  'The average kitchen contains 2.7 spatulas.',
  "More water is run through colanders every year than goes over 2 Niagara Falls!",
  'If every household lined up every grain of rice end to end, and every spaghetti noodle end to end, they would be the exact same length.',
  'If you run out of salsa, just chop up some jalapeno and put it in your pasta sauce.',
  'The FDA recommends periodically rotating your knives, forks, and spoons (take the ones on the bottom, put them on top) to ensure even wear and tear and to extend the lifespan of your utensils.',
  "The Safe Operating Temperature Range for Pyrex is -32 to 487 degrees, but some villages in iceland have been known to use them to bake lasagna inside a volcano!",
  'The Guinness World Record for tallest stack of plates is 382 feet!', "Nothing edible has been discovered in nature since 1854 when the Royal Culinary Society discovered that the Greater Amazonian Soft Potato could be rendered palatable by a complicated process involving boiling and a three day curing process."

];

var images = [
  'kitchen.jpg', 'kitchen2.jpg', 'kitchen3.jpg', 'kitchen4.jpg', 'kitchen5.jpg', 'kitchen6.jpg', 'kitchen7.jpg',

];

let emojis = ['🍇', '🍱','🍴', '🥢',
'🥤'];


function fact() {


  return theFacts[ Math.floor(Math.random() * theFacts.length)];
}

function emojii() {
  return emojis[Math.floor(Math.random() * emojis.length)];
}


let button = document.querySelector('.clickToFact');

const getTheBackgroundImage = () => {
  return `url(./images/${images[Math.floor(Math.random() * images.length)]})`

}

window.addEventListener('load', function() {
  document.querySelector('body').style.backgroundImage = getTheBackgroundImage();
});

button.addEventListener('click', function( ){
  var emoj = emojii();
  var fac = fact();
  document.querySelector('.email').classList.remove('hidden')
  document.querySelector('.next--fact').classList.remove('hidden')

  document.querySelector('.factss-box').innerHTML = ''
  document.querySelector('.factss-box').innerHTML += `<div>${emoj} ${fac} ${emoj} </div>`

  document.querySelector('a').href =`mailto:EMAILADDRESS?subject=Welcome To Kitchen Facts!!!!!&body=${fac}. Wow!`
});



document.querySelector('.next--fact').addEventListener("click", function() {
  location.reload()
  document.querySelector('body').style.backgroundImage = getTheBackgroundImage();
})
