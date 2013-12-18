/* Using the JavaScript language, have the function ArrayAdditionI(arr) 
take the array of numbers stored in arr and return the string true if any 
combination of numbers in the array can be added up to equal the largest 
number in the array, otherwise return the string false. For example: if arr 
contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 
10 + 3 = 23. The array will not be empty, will not contain all the same 
elements, and may contain negative numbers. */

function compareNumbers(a,b) {
	return a - b;
}

function ArrayAdditionI(arr) {
	arr.sort(compareNumbers); // sorting the numbers in numerical order
	var largest = arr.pop(); // pop off the last (hence, largest) number of the array
	var sum = 0;
	for (var i = 0; i < arr.length; i ++) {
		sum += arr[i]; //loop through the array, and add index number i to var sum
		for (var j = 0; j < arr.length; j++) { //start a new loop, and
			if (i != j) { // add all other numbers to sum (excluding i and largest)
				sum += arr[j]; 
				if (sum === largest){ // if sum matches largest, you can add up to largest
					return true; //break the loop and return true
				}
			}
		}
		for (var k = 0; k < arr.length; k ++) { // if you can't reach the largest starting with arr[0]
			if (i != k) { 
				sum -= arr[k]; // subtract numbers from the start
				if (sum === largest) { // to see if you can reach the largest
					return true; //break the loop and return true
				}
			}
		}
		sum = 0; // if you still can't match largest starting with arr[0], reset the loop and try with arr[1]
	}
	return false; 
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ArrayAdditionI(readline());                            
