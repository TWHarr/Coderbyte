/*Using the JavaScript language, have the function LetterChanges(str) take the str 
parameter being passed and modify it using the following algorithm. Replace every 
letter in the string with the letter following it in the alphabet (ie. c becomes d, z 
becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and f
inally return this modified string.*/

function LetterChanges(str) {
    var alphabet = "abcdefghijklmnopqrstuvwxyza"; //set up string that represents the alphabet for changing, plus extra a to account for z
    var vowels = /[aeiou]/; // regex for vowels
    alteredStr = ""; //initialize as a blank string
    for (i = 0; i < str.length; i++) { //loop through the parameter
        if (alphabet.indexOf(str.charAt(i))!= -1) { //if str[i] is found in the alphabet 
            toChange = alphabet.indexOf(str.charAt(i)); // hold that position in the alphabet
            changed = alphabet.charAt(toChange + 1); // hold the character one position up.
        } else {
            changed = str.charAt(i); // if it's not in the alphabet, hold it unaltered
        }
        if (vowels.test(changed)) { //additionally, if the character matches a vowel
            alteredStr += changed.toUpperCase(); // make it uppercase, and send it to the result
        } else {
            alteredStr += changed; // else, send it to the result unaltered
        } 
    }
    return alteredStr // return the result
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterChanges(readline());     