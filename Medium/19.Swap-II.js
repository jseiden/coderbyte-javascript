// Using the JavaScript language, have the function SwapII(str) take the str parameter and swap the case of each character. 
// Then, if a letter is between two numbers (without separation), switch the places of the two numbers. 
// For example: if str is "6Hello4 -8World, 7 yes3" the output should be 4hELLO6 -8wORLD, 7 YES3. 

function SwapII(str) {
   var arr = str.split('').map(function(letter) {
     return letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase();
   });
   var res = []; 
   var i;
   var j;

   for (i = 0; i < arr.length; i++) {
     if (arr[i].match(/[^0-9]/) || i === arr.length-1) {
       res.push(arr[i]);
     } else if (arr[i].match(/[0-9]/) && i !== arr.length-1) {
       for (j = i+1; j < arr.length; j++) {
         if (arr[j] === " ") {
           res.push(arr[i]);
           break;
         } else if (arr[j].match(/[0-9]/)) {
           res.push(arr[j]);
           arr[j] = arr[i];
           break;
         } 
       }
       if (res.length === i) {
         res.push(arr[i]);
       }
      
     }  
   }

   return res.join(""); 
}

