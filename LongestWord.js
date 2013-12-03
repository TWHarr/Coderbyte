/* Have the function LongestWord(sen) take the sen parameter being passed 
and return the largest word in the string. If there are two or more words 
that are the same length, return the first word from the string with that 
length. Ignore punctuation and assume sen will not be empty. */

function LongestWord(sen) {
	nsen = sen.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");
	words = nsen.split(" ");
	word = "a"
	for (i = 0; i < words.length; i++){
		if (words[i].length > word.length){
			word = words[i]
		}
	}
	return word
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LongestWord(readline());                            
