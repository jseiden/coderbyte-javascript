// Using the JavaScript language, have the function CountingMinutes(str) take the str parameter being passed 
// which will be two times (each properly formatted with a colon and am or pm) separated by a hyphen and return the total number of minutes between the two times. 
// The time will be in a 12 hour clock format. For example: if str is 9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am the output should be 1320. 

function CountingMinutes(str) {
  var times = str.split("-");

   function makeMinutes(s) {
        var amOrPm = s.slice(-2);
        var numArr = s.slice(0,-2).split(":");
        if(amOrPm === "am" && +numArr[0] === 12) {
               return +numArr[1];
             } else if(amOrPm === "pm" && +numArr[0] === 12) {
                    return 720 + +numArr[1];
                  } else if(amOrPm === "am") {
                         return +numArr[0] * 60 + +numArr[1];
                       } else if(amOrPm === "pm") {
                              return +numArr[0] * 60 + 720 + +numArr[1];
                            }
     }

  var time1 = makeMinutes(times[0]);
  var time2 = makeMinutes(times[1]);

  return time1 > time2 ? 1440 - time1 + time2 : time2 - time1;
}

