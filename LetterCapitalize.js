function LetterCapitalize(str) {
	var newStr = str[0].toUpperCase();
	for (i = 1; i < str.length; i ++){
		if (str[i - 1] != " "){
			newStr = newStr + str[i];
		} else{
			newStr = newStr + str[i].toUpperCase();
		}
	}
	return newStr; 
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterCapitalize(readline());                       
