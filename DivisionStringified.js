/* Using the JavaScript language, have the function DivisionStringified(num1,num2) take both parameters being passed, divide num1 by num2, and return the result as a string with properly formatted commas. If an answer is only 3 digits long, return the number with no commas (ie. 2 / 3 should output "1"). For example: if num1 is 123456789 and num2 is 10000 the output should be "12,345". */

function DivisionStringified(num1,num2) {
    var rounded = String(Math.round(num1 / num2));
    if (rounded.length < 4){
        return String(rounded);
    }
    var roundedArr = rounded.split("");
    for (var i = roundedArr.length - 1; i >= 0; i--) {
        if (i % 3 === 0){
            roundedArr.splice(i,0, ",");
        }
    }
    rounded = roundedArr.join("");
    return rounded;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
DivisionStringified(readline());                            




