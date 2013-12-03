/*Using the JavaScript language, have the function FirstReverse(str) take 
the str parameter being passed and return the string in reversed order. */

function FirstReverse(str) { 
	reversed = ""
	for (i = str.length-1; i >= 0; i--){
		reversed += str[i]
	}
	return reversed; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
FirstReverse(readline());       