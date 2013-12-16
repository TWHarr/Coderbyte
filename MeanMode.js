/*Using the JavaScript language, have the function 
MeanMode(arr) take the array of numbers stored in 
arr and return 1 if the mode equals the mean, 0 if 
they don't equal each other (ie. [5, 3, 3, 3, 1] 
should return 1 because the mode (3) equals the 
mean (3)). The array will not be empty, will only 
contain positive integers, and will not contain 
more than one mode. */

function MeanMode(arr) {
    var mean = 0;
    for (var i = 0; i < arr.length; i++) {
        mean += arr[i];
    }
    mean = (mean / arr.length);
    var modeCount = 0;
    var currentCount = 0;
    var mode = 0;
    for (var j = 0; j < arr.length; j++) {
        if (arr[j] === arr[j+1]) {
            currentCount += 1;
        } else {
            if (currentCount > modeCount) {
                modeCount = currentCount;
                mode = arr[j];
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





