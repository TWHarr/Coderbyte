/*Using the JavaScript language, have the function VowelCount(str)
take the str string parameter being passed and return the number 
of vowels the string contains (ie. "All cows eat grass" would 
return 5). Do not count y as a vowel for this challenge.*/ 

function VowelCount(str) {
	var count = 0;
	for (i = 0; i < str.length; i++){
		switch (str.charAt(i)){
			case "a":
				count += 1;
				break;
			case "e":
				count += 1;
				break;
			case "i":
				count += 1;
				break;
			case "o":
				count += 1;
				break;
			case "u":
				count += 1;
				break;
			default:
				count = count;
		}
	}
	return count;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
VowelCount(readline());                            

