/* Have the function FirstFactorial(num) take the num 
parameter being passed and return the 
factorial of it (ie. if num = 4, return (4 * 3 * 2 * 1)). 
For the test cases, the range 
will be between 1 and 18. */

function FirstFactorial(num) { 
	for (i = num-1; i > 0; i--){ // start a for loop, starting from one less than num, down to 1
		num *= i // multiply num by i. 
	}
	return num; // return num, which has been factorialized.
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
FirstFactorial(readline());                            
