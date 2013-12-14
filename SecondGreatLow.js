/* Using the JavaScript language, have the function SecondGreatLow(arr) take the array of numbers stored in arr and return the second lowest and second greatest numbers, respectively, separated by a space. For example: if arr contains [7, 7, 12, 98, 106] the output should be 12 98. The array will not be empty and will contain at least 2 numbers. It can get tricky if there's just two numbers! */

function compareNumber(a,b){
    return a - b;
}

function SecondGreatLow(arr) {
    arr.sort(compareNumber);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if ((arr.length === 2) && (arr[i] === arr[j])){
                return arr[0] + " " + arr[1]; 
            } else if ((i != j) && (arr[i] === arr[j])){
                index = arr[j];
                arr.splice(j, 1);
            }
        };
    };
    return arr[1] + " " + arr[arr.length -2];
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SecondGreatLow(readline());                            


