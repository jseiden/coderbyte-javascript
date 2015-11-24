// Using the JavaScript language, have the function CoinDeterminer(num) take the input, 
// which will be an integer ranging from 1 to 250, and return an integer output that will specify the least number of coins, 
// that when added, equal the input integer. 
// Coins are based on a system as follows: there are coins representing the integers 1, 5, 7, 9, and 11. 
// So for example: if num is 16, then the output should be 2 because you can achieve the number 16 with the coins 9 and 7. 
// If num is 25, then the output should be 3 because you can achieve 25 with either 11, 9, and 5 coins or with 9, 9, and 7 coins. 

function CoinDeterminer(num) {
  var coins = [11, 9, 7, 5, 1];
  var count1 = getFirstCombo(num, 0, coins.slice());
  var count2 = num;

  function getFirstCombo(total, cnt, options) {
    if (total % options[0] === 0) {
      cnt += total / options[0];
      return cnt;
    }
    cnt += Math.floor(total / options[0]);
    total -= (total - (total % options[0]));
    options.shift();
    return getFirstCombo(total, cnt, options);
  }

  function optimizeCombo(used, len) {
    if (used.length === len) {
      var sum = used.reduce(function(a,b){return a+b;});
      if (sum === num) {
        count2 = len < count2 ? len : count2;
        return;
      }
      return;  
    }
    for (var i = 0; i < coins.length; i++) {
      used.push(coins[i]);
      optimizeCombo(used, len);
      used.pop();
    }
  }

  for (var j = count1; j > 0; j--) {
    optimizeCombo([],j);
  }

  optimizeCombo([], count1);
  return count2;
}
console.log(CoinDeterminer(25));

