/* Using the JavaScript language, have the function WordCount(str) 
take the str string parameter being passed and return the number 
of words the string contains (ie. "Never eat shredded wheat" would 
return 4). Words will be separated by single spaces. */

function WordCount(str) {
	var count = 1
	for (i = 0; i < str.length; i++){
		if (str.charAt(i) === " "){
			count += 1;
		}
	}
	return count;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
WordCount(readline());                            

