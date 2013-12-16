/* Using the JavaScript language, have the function NumberSearch(str) take the str parameter, search for all the numbers in the string, add them together, then return that final number. For example: if str is "88Hello 3World!" the output should be 91. You will have to differentiate between single digit numbers and multiple digit numbers like in the example above. So "55Hello" and "5Hello 5" should return two different answers. Each string will contain at least one letter or symbol. */

function NumberAddition(str) {
    var number = /[0-9]/;
    var result = 0;
    var temp = 0;
    for (i = 0; i < str.length; i++) {
        if (number.test(str.charAt(i))) {
            temp += str.charAt(i)
        } else {
            result += parseInt(temp, 10);
            temp = 0;
        }
    }
    result += parseInt(temp,10);
    return result;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
NumberAddition(readline()); 