/*Using the JavaScript language, have the function 
DashInsert(num) insert dashes ('-') between each 
two odd numbers in num. For example: if num is 
454793 the output should be 4547-9-3. Don't count 
zero as an odd number. */

function DashInsert(num) {
    var number = String(num);
    var odd = /[13579][13579]/;
    var build = [];
    for (var i = 0; i < number.length; i++) {
        build.push(number[i]);
        var bit = number.slice(i, i+2);
        if (odd.test(bit)) {
            build.push("-");
        }
    }
    var result = build.join("");
    return result;
}   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
DashInsert(readline());                           