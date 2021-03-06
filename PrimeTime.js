/* Using the JavaScript language, have the function PrimeTime(num) 
take the num parameter being passed and return the string true if 
the parameter is a prime number, otherwise return the string false. 
The range will be between 1 and 2^16.  */

function PrimeTime(num) {
	for (var i = num-1; i > 1; i--) {
		if (num % i === 0){
			return false;
		}
	}
	return true; 
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
PrimeTime(readline());    
