/* Have the function LongestWord(sen) take the sen parameter being passed 
and return the largest word in the string. If there are two or more words 
that are the same length, return the first word from the string with that 
length. Ignore punctuation and assume sen will not be empty. */

function LongestWord(sen) {
	words = sen.replace(/[^\w\s]/g,"").split(" "); //use regex to replace all punctuation with "" and split the string by word
	word = ""; // initialize variable to store longest word
	for (i = 0; i < words.length; i++){ //loop through the array holding the words
		if (words[i].length > word.length){ //if the current word being examined is longer than the current longest word
			word = words[i]; // the current word becomes the longest word
		}
	}
	return word; // return the longest word
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LongestWord(readline());                            
