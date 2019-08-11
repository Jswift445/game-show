var qwerty = document.getElementById('qwerty');
var phrase = document.getElementById('phrase');
var missed = 0;


const phrases = [
  "one man dying of thirst while another man drown",
  "the rain in spain stays mainly in the plain",
  "two birds of feather flocks together",
  "a clean sweep",
  "a city rich in history"
  ];

$('.btn__reset').click(function(){
 $("#overlay").hide();
 });

//randomly shuffling the phrases
function getRandomPhraseAsArray(arr){
 let arraySet = Math.floor(Math.random() * arr.length);
 let randomPhrase = arr[arraySet];
 let phraseSet = [];

 for (let i = 0; i < randomPhrase.length; i += 1) {
   phraseSet.push(randomPhrase[i]);
 }

 return phraseSet;
};

getRandomPhraseAsArray(phrases);

// Display the array in random order
function addPhraseToDisplay(arr){
 const ul = document.getElementById('phrase');

 for (let i = 0; i < arr.length; i ++) {
   const phraseChar = arr[i];
   const li = document.createElement('li');

   li.textContext = phraseChar;

   if(li.textContext !=' '){
     li.className = 'letter';
     ul.appendChild(li);
   } else {
     li.className = 'space';
     ul.appendChild(li);
   }
 }
}

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);
console.log(phrases);


function checkLetter(arr) {
const buttonClick = arr;
const phraseLetter = document.getElementsByClassName('letter');
const nope = null;

   for(let i = 0; i < phraseLetter.length; i ++) {
     if(buttonClick.toUpperCase() === phraseLetter[i].textContent.toUpperCase()){
       phraseLetter[i].className += 'show';
       nope = buttonClick;
     }
   }
   return nope;

 };


// create the players guess click function
qwerty.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    let buttonText = e.target.textContent;

    e.target.className = 'chosen';
    e.target.disabled = true;

    let thereItIs = checkLetter(buttonText);
    console.log("The value returned from checkLetter is: " + thereItIs);

    if (thereItIs === null) {
      missed = missed + 1;
      console.log("the number of missed guesses is:" + missed);

      let hearts = document.getElementsByClassName('tries');
      console.log(hearts[0]);
      hearts[5 - missed].lastElementChild.setAttribute('src', 'images/lostHeart.png');

    }

  }
});
