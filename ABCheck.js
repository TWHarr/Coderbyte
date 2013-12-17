/*Using the JavaScript language, have the function ABCheck(str) 
take the str parameter being passed and return the string true 
if the characters a and b are separated by exactly 3 places anywhere 
in the string at least once (ie. "lane borrowed" would result in 
true because there is exactly three characters between a and b). 
Otherwise return the string false. */

function ABCheck(str) {
	var re = /a...b/; //regex for a separated from b by any 3 characters
	return re.test(str); //return result of regex test. 
	}
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ABCheck(readline());      