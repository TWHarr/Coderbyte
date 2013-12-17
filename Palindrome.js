/*Using the JavaScript language, have the function Palindrome(str)
take the str parameter being passed and return the string true if
the parameter is a palindrome, (the string is the same forward as
it is backward) otherwise return the string false. For example:
"racecar" is also "racecar" backwards. Punctuation and numbers 
will not be part of the string. */

function Palindrome(str) {
	var str = str.replace(/\s/g,''); //remove spaces from str
	var backward = str.split('').reverse().join(''); // split the string, reverse it, and join it again
	return (backward === str); //return the backward === string check result
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
Palindrome(readline());                            




