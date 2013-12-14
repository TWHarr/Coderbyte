/*Using the JavaScript language, have the function ExOh(str) 
take the str parameter being passed and return the string 
true if there is an equal number of x's and o's, otherwise 
return the string false. Only these two letters will be entered 
in the string, no punctuation or numbers. For example: if str 
is "xooxxxxooxo" then the output should return false because 
there are 6 x's and 5 o's. */

function ExOh(str) {
	var ex = 0;
	var oh = 0;
	for (i = 0; i < str.length; i++) {
		switch (str.charAt(i)){
			case "x":
				ex += 1;
				break;
			case "o":
				oh += 1;
				break;
			default: 
				ex = ex;
		}
	}
	return ex === oh; 
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ExOh(readline());   