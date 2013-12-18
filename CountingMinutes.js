/*Using the JavaScript language, have the function CountingMinutesI(str) 
take the str parameter being passed which will be two times (each properly 
formatted with a colon and am or pm) separated by a hyphen and return the 
total number of minutes between the two times. The time will be in a 12 
hour clock format. For example: if str is 9:00am-10:00am then the output 
should be 60. If str is 1:00pm-11:00am the output should be 1320. */

function CountingMinutesI(str) {
    var re = /(.{1,2}):(.{1,2})(am|pm)\-(.{1,2}):(.{1,2})(am|pm)/; //regex to make sure input conforms and can be transformed
    var timeArray = str.match(re); //convert to array, using regex to make sure it's transferred right
    var time1 = parseInt(timeArray[1], 10) * 60 + parseInt(timeArray[2], 10); // pull out hours and mintues for time 1
    var time2 = parseInt(timeArray[4], 10) * 60 + parseInt(timeArray[5], 10); // pull out hours and minutes for time 2
    var meridian = (timeArray[3] != timeArray[6]) ? 12 * 60 : 0; // add 12 hours to time difference if am to pm or vice versa
    var result = time2 - time1 + meridian; // find the difference between the two times, accounting for am/pm
    if (result < 0) { // if the times pass into a new day (and give a negative result)
        result += 24 * 60; // add 24 hours to the negative to get the actual minute count.
    }
    return result; 
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
CountingMinutesI(readline());                            





