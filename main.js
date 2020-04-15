'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const pigLatin = (word) => {
  let listOfVowels = ["a", "e", "i", "o", "o"];
 
  let indexClosestToZero = 999;

  for(let i = 0; i <= listOfVowels.length -1; i++) {
    let index = word.indexOf(listOfVowels[i]);
    if(index >=0 && index < indexClosestToZero) {
      indexClosestToZero = index;
    } 
  
  }

//TODO For Loop needs to allow simple words and complex words to work

  // if word has more then one consonant 
  let wordBeginning = word.substring(0, 1); // Break the word into right before the first vowel
  let wordEnding = word.substring(1, 6); // Break the word on the vowel into the vowel and rest of the word
  let newCompleteWord = wordEnding + wordBeginning + "ay"; // Combines two substrings with "ay"
  return newCompleteWord // Returns Output logic in console
}

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// const toWeb = () => {
//   let myPrompt = prompt('Please Enter Your Word');
//   if(myPrompt != null) {
//     document.getElementById('pigTag').innerHTML = 
//     "Your word is " + myPrompt;
//   }
// }

// Unit Tests
// You use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}






// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins in with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.