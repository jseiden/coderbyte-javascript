//Using the JavaScript language, have the function SecondGreatLow(arr) take the array of numbers stored in arr and return the second lowest and second greatest numbers, respectively, separated by a space. For example: if arr contains [7, 7, 12, 98, 106] the output should be 12 98. The array will not be empty and will contain at least 2 numbers. It can get tricky if there's just two numbers! 

function SecondGreatLow(arr) {
  var secondGreat = "";
  var secondLow = "";

  var makeUniq = function(array) {
    var storage = {};
    var result = [];
    array.forEach(function(num) {
      if(!storage[num]){
        storage[num] = num;
      }
    })
    for(var key in storage) {
      result.push(storage[key]);
    }
    return result;
  }

  var sortedArr = arr.length === 2 && arr[0] === arr[1] ? arr : makeUniq(arr).sort(function(a,b){return a - b});

  secondGreat = sortedArr[sortedArr.length -2];
  secondLow = sortedArr[1];

  return secondLow + " " + secondGreat;
}
