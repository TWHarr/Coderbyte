/*Using the JavaScript language, have the function VowelCount(str)
take the str string parameter being passed and return the number 
of vowels the string contains (ie. "All cows eat grass" would 
return 5). Do not count y as a vowel for this challenge.*/ 

function VowelCount(str) {
	var count = 0; //initialize count at 0 
	var re = /[aeiou]/ //regex to hold vowels
	for (i = 0; i < str.length; i++) { //loop through given string
		if (re.test(str.charAt(i))) { //if test passes
			count += 1; //increment count by 1
		}
	}
	return count;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
VowelCount(readline());                            

