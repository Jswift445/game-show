var qwerty = document.getElementById('qwerty');
var phrase = document.getElementById('phrase');
var missed = 0;
var startGame =  document.getElementById('overlay').lastElementChild;

let phrases = [
  "CSS",
  "JavaScript",
  "Iron Man",
  "Jack Baer",
  "David Banner",
  " A city rich in history"
  ];

$('.btn__reset').click(function(){
 $("#overlay").hide();
 });

//randomly shuffling the phrases
function getRandomPhraseAsArray(arr){
 let arraySet = Math.floor(Math.random() * arr.length);
 let randomPhrase = arr[arraySet];

 let phraseSet = [];

 for (let i = 0; i < randomPhrase.length; i ++) {
   phraseSet.push(randomPhrase[i]);
 }

 return phraseSet;

};

getRandomPhraseAsArray(phrases);

// Display the array in random order
function addPhraseToDisplay(arr){
 let ul = document.getElementById('phrase').firstElementChild;

 for (let i = 0; i < arr.length; i ++) {
   let phraseChar = arr[i];
   let li = document.createElement('li');

   li.textContent = phraseChar;

   if(li.textContent !=' '){
     li.className = 'letter';
     ul.appendChild(li);
   } else {
     li.className = 'space';
     ul.appendChild(li);
   }
 }
}



// This function checks to see if the letter the user clicks is in the array
function checkLetter(arr) {
let buttonClick = arr;
let phraseLetter = document.getElementsByClassName('letter');
let nope = null;

   for(let i = 0; i < phraseLetter.length; i ++) {
     if(buttonClick.toUpperCase() === phraseLetter[i].textContent.toUpperCase()){
       phraseLetter[i].className += ' show';
       nope = buttonClick;
     }
   }
   return nope;

 };


/* This function matches the length of the both the show and phrase letters
   to see if the user has won the game.*/
function checkWin() {
const showLetters = document.querySelectorAll('.show');
phraseLetter = document.querySelectorAll('.letter');
let overlay = document.querySelector('#overlay');
title = document.querySelector('.title');

if(showLetters.length === phraseLetter.length) {
   overlay.style.display = '';
   overlay.className = 'win';
   title.textContent = 'Congrats!!!';
 }else if (missed === 5) {
   overlay.style.display = '';
   overlay.className = 'lose';
   title.textContent = 'Nice Try';
 }
};


/* This tells the code to listen to the clicks and fires off the checkLetter
    fuction as ,well, as the checkWin fuction*/
qwerty.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    let buttonText = e.target.textContent;

    e.target.className = 'chosen';
    e.target.disabled = true;

    let thereItIs = checkLetter(buttonText);
    // console.log("The value returned from checkLetter is: " + thereItIs);

    if (thereItIs === null) {
      missed = missed + 1;
      // console.log("the number of missed guesses is:" + missed);

      let hearts = document.getElementsByClassName('tries');
      // console.log(hearts[0]);
      hearts[5 - missed].lastElementChild.setAttribute('src', 'images/lostHeart.png');

    }
 checkWin();
 }

});

//Set up the game to set
 function resetPhrase() {
 const ul = document.getElementById('phrase').firstElementChild;
 while (ul.firstElementChild) {
   ul.removeChild(ul.firstElementChild);
 }
 let phraseArray = getRandomPhraseAsArray(phrases);
 addPhraseToDisplay(phraseArray);
 console.log(phrases);
};
function resetKeyboard() {
  qwertyButtons = qwerty.getElementsByTagName('button');

  for (let i = 0; i < qwertyButtons.length; i ++) {
    qwertyButtons[i].className = 'null';
    qwertyButtons[i].disabled = false;
  }
};

function restScoreboard() {
  missed = 0;
  let giveHearts = document.getElementsByClassName('tries');

  for (i = 0; i < giveHearts.length; i ++) {
    giveHearts[i].lastElementChild.setAttribute('src', 'images/liveHeart.png');
  }
};

startGame.addEventListener('click', () => {
  overlay.style.display = 'none';
  resetPhrase();
  resetKeyboard();
  restScoreboard();
});
