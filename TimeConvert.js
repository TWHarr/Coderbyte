/* Using the JavaScript language, have the function TimeConvert(num) 
take the num parameter being passed and return the number of hours and
minutes the parameter converts to (ie. if num = 63 then the output should be 1:3). 
Separate the number of hours and minutes with a colon. */

function TimeConvert(num) {
    hrs = Math.floor(num / 60); // round down to nearest full hour
	min = num - (hrs * 60); // subtract the hours from num to get minutes
	time = hrs + ":" + min; // join hours and minutes to get the properly formated display
	return time; //return it
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
TimeConvert(readline());                            


