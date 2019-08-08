var qwerty = document.getElementById('qwerty');
var phrase = document.getElementById('phrase');
var missed = 0;


const phrases = [
  "One man dying of thirst while another man drown",
  "The rain in spain stays mainly in the plain",
  "Two birds of feather flocks together",
  "A clean sweep",
  "A city rich in history"
  ];

$('.btn__reset').click(function(){
 $("#overlay").hide();
 });

//randomly shuffling the phrases
function getRandomPhraseAsArray(arr){
 let phrase = arr.length;
 let temp;
 let index;

  while (phrase > 0) {
    index = Math.floor(Math.random() * phrase);
    phrase--;

    temp = arr[phrase];
    arr[phrase] = arr[index];
    arr[index] = temp;
  }
  return arr;
}

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
const click = arr;
const letter = document.getElementByClass('letter');
const nope = null;

   for(let i = 0; i <letter.length; i ++) {
     if(click.toUpperCase() === letter[i].textContent.toUpperCase()){
       letter[i].className += 'show';
       nope = click;
     }
   }
   return nope;
 };
