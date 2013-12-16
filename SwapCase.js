/*Using the JavaScript language, have the function SwapCase(str) take the str parameter and swap the case of each character. For example: if str is "Hello World" the output should be hELLO wORLD. Let numbers and symbols stay the way they are. */

function SwapCase(str) {
    var upper = /[A-Z]/;
    var lower = /[a-z]/;
    var build = [];
    for (var i = 0; i < str.length; i++) {
        if (upper.test(str.charAt(i))) {
            build.push(str.charAt(i).toLowerCase());
        } else if (lower.test(str.charAt(i))) {
            build.push(str.charAt(i).toUpperCase());
        } else {
            build.push(str.charAt(i));
        }
    }
    return build.join("");
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SwapCase(readline());       