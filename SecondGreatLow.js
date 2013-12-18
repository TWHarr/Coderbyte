/* Using the JavaScript language, have the function 
SecondGreatLow(arr) take the array of numbers stored 
in arr and return the second lowest and second greatest 
numbers, respectively, separated by a space. For example: 
if arr contains [7, 7, 12, 98, 106] the output should be 
12 98. The array will not be empty and will contain at 
least 2 numbers. It can get tricky if there's just two numbers! */

function compareNumber(a,b){ // function to sort numbers in order
    return a - b;
}

function SecondGreatLow(arr) {
    arr.sort(compareNumber); //sort using compareNumber
    for (var i = 0; i < arr.length; i++) { //start loop 1
        for (var j = 0; j < arr.length; j++) { // start loop 2
            if ((arr.length === 2) && (arr[i] === arr[j])){ // if there are two numbers in arr and they're the same
                return arr[1] + " " + arr[0]; // return them. 
            } else if ((i != j) && (arr[i] === arr[j])){ // when i/j not the same and the numbers are the same
                arr.splice(j, 1); // use splice to delete from array
            }
        }
    }
    return arr[1] + " " + arr[arr.length -2]; // once dupes are removed, return second, and second to last.
}

   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SecondGreatLow(readline());                            


