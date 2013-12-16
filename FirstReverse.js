/*Using the JavaScript language, have the function FirstReverse(str) take 
the str parameter being passed and return the string in reversed order. */

function FirstReverse(str) { 
	return str.split("").reverse().join(""); //split string into an array of individual characters, reverse the array, then join with no separator and return it
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
FirstReverse(readline());       