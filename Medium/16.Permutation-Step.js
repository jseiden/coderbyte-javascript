// Using the JavaScript language, have the function PermutationStep(num) take the num parameter being passed
// and return the next number greater than num using the same digits.
// For example: if num is 123 return 132, if it's 12453 return 12534. If a number has no greater permutations, return -1 (ie. 999).

function PermutationStep(num) {
  var arr = num.toString().split('');

  var results = [];
  var used = [];
  var idx;
  var resultsNoDups;

  function perm(choices) {
    for (var i = 0; i < choices.length; i++) {
      var ch = choices.splice(i, 1);
      used.push(ch);
      if (choices.length === 0) {
        results.push(used.join(""));
      }
      perm(choices);
      choices.splice(i, 0, ch);
      used.pop();
    }
  }
  perm(arr);

  resultsNoDups = results.filter(function(item, pos){
    return results.indexOf(item) === pos;
  });
  sorted = resultsNoDups.sort(function(a,b){
    return +a - +b;
  });
  idx = sorted.indexOf(num.toString());

  return sorted.length === 1 || idx + 1 === sorted.length ? -1 : sorted[idx + 1];
}
console.log(PermutationStep(456));
