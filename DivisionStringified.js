/* Using the JavaScript language, have the function 
DivisionStringified(num1,num2) take both parameters 
being passed, divide num1 by num2, and return the 
result as a string with properly formatted commas. 
If an answer is only 3 digits long, return the number 
with no commas (ie. 2 / 3 should output "1"). For 
example: if num1 is 123456789 and num2 is 10000 
the output should be "12,345". */

function DivisionStringified(num1,num2) {
    return (Math.round(num1/num2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
//divide and round, then convert to string. Use regex to insert commas.
//regex explanation:
// find any non word boundary that isn't followed by a digit and is preceeded by 3 digits. global match.
// so basically it works its way back. the first three digits not followed by another digit are the last three (the hundreds)
// then, it insers a comma at that boundary. It the next 3 digits not followed by another digits are the thousands
// which are now followed by a comma. etc. 

   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
DivisionStringified(readline());                            




