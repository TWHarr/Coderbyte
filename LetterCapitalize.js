/* Using the JavaScript language, have the function LetterCapitalize(str) 
take the str parameter being passed and capitalize the first letter of each 
word. Words will be separated by only one space. */

function LetterCapitalize(str) {
	var newStr = str[0].toUpperCase(); // always capitalize the first letter of the sentence
	for (i = 1; i < str.length; i ++){ // loop through the remaining characters of the sentence
		if (str[i - 1] != " "){ // if the character preceding i is a space, it's a new word.
			newStr += str[i]; //add it to the result, capitalized
		} else{
			newStr += str[i].toUpperCase(); // else just pass it to the new string.
		}
	}
	return newStr; //return the result
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterCapitalize(readline());                       
