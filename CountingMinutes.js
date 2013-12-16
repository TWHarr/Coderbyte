/*Using the JavaScript language, have the function CountingMinutesI(str) take the str parameter being passed which will be two times (each properly formatted with a colon and am or pm) separated by a hyphen and return the total number of minutes between the two times. The time will be in a 12 hour clock format. For example: if str is 9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am the output should be 1320. */

function CountingMinutesI(str) {
    var splitTime = str.split(/-/);
    var time1 = splitTime[0].slice(0,splitTime[0].length-2).split(":");
    var meridian1 = splitTime[0][splitTime[0].length-2];
    var time2 = splitTime[1].slice(0,splitTime[1].length-2).split(":");
    var meridian2 = splitTime[1][splitTime[1].length-2];
    var minutes1 = parseInt(time1[0]) * 60 + parseInt(time1[1]);
    var minutes2 = parseInt(time2[0]) * 60 + parseInt(time2[1]);

    if (meridian1 === "p" && time1[0] !== "12") {
    minutes1 += 12 * 60;
    }
    if (meridian2 === "p" && time2[0] !== "12") {
    minutes2 += 12 * 60;
    } 
  
    if (meridian1 === "a" && time1[0] === "12") {
    minutes1 -= (12 * 60);
    }
    if (meridian2 === "a" && time2[0] === "12") {
    minutes2 -= (12 * 60);
    }
  
    if (minutes1 > minutes2) {
        return ((24 * 60) - minutes1) + minutes2;
    } else {
        return minutes2 - minutes1;
  }
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
CountingMinutesI(readline());                            





