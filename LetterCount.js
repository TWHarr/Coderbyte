/* Using the JavaScript language, have the function LetterCountI(str) 
take the str parameter being passed and return the first word with 
the greatest number of repeated letters. For example: "Today, is the 
greatest day ever!" should return greatest because it has 2 e's 
(and 2 t's) and it comes before ever which also has 2 e's. If there 
are no words with repeating letters return -1. Words will be separated 
by spaces. */

function LetterCountI(str) { 
  var words = str.split(" "); // split the string into an array of individual words
  var count = 0; // initialize count at 0 
  var word = ""; // initialize word as empty
  for (var i = 0; i < words.length; i++) { // loop through the array word by word
    var wordx = words[i]; // hold the current word in wordx
    var sum = 0; // set sum of repeats as 0
    for (var j = 0; j < words[i].length; j++) { // loop through letters of wordx 
      var letter = wordx[j]; //hold the current letter of wordx as letter
      for (var k = 0; k < wordx.length; k++) { // loop through the other letters in the word
        if ((j != k) && (letter === wordx[k])){ // if they match letter, increase the sum by one
          sum += 1;
        }
      }
    }
    if (sum > count) { // after looping through the word, if the sum is more than the current most repeats
        count = sum; // replace count with sum
        word = wordx; // and the return value with wordx 
    }
  }
  if (count > 0) { // if there are repeated letters, return the word.
    return word;
  } else{ // if there are no repeats, return -1
    return "-1";
  }
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterCountI(readline());                            

