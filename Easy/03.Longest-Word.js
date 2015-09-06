function LongestWord(sen) {
  var longest = "";
  // g flag returns array of matches
  var arr = sen.match(/\w[a-z]{0,}/gi);
  arr.forEach(function(el) {
    if(el.length > longest.length) {
      longest = el;
    }
  }); 
  return longest;
}
