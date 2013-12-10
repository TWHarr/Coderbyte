/* Using the JavaScript language, have the function TimeConvert(num) 
take the num parameter being passed and return the number of hours and
minutes the parameter converts to (ie. if num = 63 then the output should be 1:3). 
Separate the number of hours and minutes with a colon. */

function TimeConvert(num) {
    hrs = Math.floor(num / 60);
	min = num - (hrs * 60);
	time = hrs + ":" + min;
	return time;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
TimeConvert(readline());                            


