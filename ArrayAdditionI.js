/* Using the JavaScript language, have the function ArrayAdditionI(arr) take the array of numbers stored in arr and return the string true if any combination of numbers in the array can be added up to equal the largest number in the array, otherwise return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not contain all the same elements, and may contain negative numbers. */

function compareNumbers(a,b) {
	return a - b;
}
function ArrayAdditionI(arr) {
	var result = false;
	var sorted = arr.sort(compareNumbers);
	var largest = sorted[sorted.length-1];
	var addition = sorted[0];
	for (i = 1; i < sorted.length; i ++) {
		addition += sorted[i];
		if (addition === largest) {
			result = true;
		}
	}
	return result;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ArrayAdditionI(readline());                            
