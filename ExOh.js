/*Using the JavaScript language, have the function ExOh(str) 
take the str parameter being passed and return the string 
true if there is an equal number of x's and o's, otherwise 
return the string false. Only these two letters will be entered 
in the string, no punctuation or numbers. For example: if str 
is "xooxxxxooxo" then the output should return false because 
there are 6 x's and 5 o's. */

function ExOh(str) {
	var strArr = str.split("").sort().join("").split("ox"); // sort the string alphabetically, split it when the letter changes
	if (strArr.length === 1) { // return false if there are only Xs or Os.
		return false;
	} else { // if there are both
		return (strArr[0].length === strArr[1].length) //check if they are equal.
	}
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ExOh(readline());   