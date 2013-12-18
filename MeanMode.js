/*Using the JavaScript language, have the function 
MeanMode(arr) take the array of numbers stored in 
arr and return 1 if the mode equals the mean, 0 if 
they don't equal each other (ie. [5, 3, 3, 3, 1] 
should return 1 because the mode (3) equals the 
mean (3)). The array will not be empty, will only 
contain positive integers, and will not contain 
more than one mode. */

function MeanMode(arr) {
    arr.sort(); //make sure the values are in order

    var mean = 0; //initialize mean variable
    for (var i = 0; i < arr.length; i++) {
        mean += arr[i]; //sum up the array elements
    }
    mean = (mean / arr.length); //divid by number of elements to get the mean 
    
    var modeCount = 0; // number of ocurrences of the mode
    var currentCount = 0; // number of occurrences of the element the loop will test
    var mode = 0; // the mode
    for (var j = 0; j < arr.length; j++) { 
        if (arr[j] === arr[j+1]) {
            currentCount += 1; // count number of subsequent j until it's different
        } else { // once you get something different,
            if (currentCount > modeCount) { // if it was more than the current mode
                modeCount = currentCount; //make that the new count
                mode = arr[j]; // and make element j the mode
            }
        }
    }
    if (mean === mode) {
        return 1;
    } else {
        return 0;
    }
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
MeanMode(readline());                            





