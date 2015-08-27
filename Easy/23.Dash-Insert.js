// Using the JavaScript language, have the function DashInsert(str) insert dashes ('-') between each two odd numbers in str. 
// For example: if str is 454793 the output should be 4547-9-3. Don't count zero as an odd number. 

function DashInsert(str) { 
  var arr = str.split("");  
  var i = 0;
  while(i  < arr.length){
    if(arr[i] % 2 !== 0 && arr[i+1] && arr[i+1] % 2 !== 0){
      arr.splice(i+1, 0, "-");
      i = i + 2;
    } else{
      i++;
    }  
  }
  return arr.join("");
}
