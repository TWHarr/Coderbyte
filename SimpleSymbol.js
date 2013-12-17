/* Using the JavaScript language, have the function SimpleSymbols(str) 
take the str parameter being passed and determine if it is an acceptable
sequence by either returning the string true or false. The str parameter will be 
composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) 
and for the string to be true each letter must be surrounded by a + symbol. So 
the string to the left would be false. The string will not be empty and will 
have at least one letter. */

function SimpleSymbols(str) {
	var alph = /[a-z]/; //regex to hold alphabet. 
	for (i = 0; i < str.length; i ++){ //start a loop to go through the string 
		if (alph.test(str[i])){ // if the regex test is true...
			if (str.charAt(i-1) != "+" || str.charAt(i+1) != "+"){ // but one of the characters isn't +...
				return false; // break the loop and return false.
			}
		}
	}
	return true; // if the loop doesn't get broken by a false, return true.
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SimpleSymbols(readline());                            
