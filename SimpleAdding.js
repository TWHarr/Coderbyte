//Using the JavaScript language, have the function SimpleAdding(num) 
//add up all the numbers from 1 to num. For the test cases, the 
//parameter num will be any number from 1 to 1000. 

function SimpleAdding(num){
	var sum = 0 // initialize sum at 0
	for (i = 1; i <= num; i++){ //loop from 1 to the given number
		sum += i // add that number to sum
	}
	return sum // return the sum
}
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SimpleAdding(readline());                            

