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
