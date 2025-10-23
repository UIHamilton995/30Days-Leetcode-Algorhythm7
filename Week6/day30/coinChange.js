function coinChange(coins, amount) {
  // Step 1: Create an array to track the fewest coins needed for every sub-amount
  const minCoinsNeeded = new Array(amount + 1).fill(Infinity);
  
  // Step 2: Base case — to make ₦0, we need 0 coins
  minCoinsNeeded[0] = 0;

  // Step 3: Loop through every amount from 1 up to targetAmount
  for (let currentAmount = 1; currentAmount <= amount; currentAmount++) {
      
      // Step 4: Try using each coin denomination
      for (let coinValue of coins) {
          
          // Check if the coin can be used (can't use coin larger than the currentAmount)
          if (currentAmount - coinValue >= 0) {
              
              // Imagine "taking" that coin → the remainder is (currentAmount - coinValue)
              // Then add 1 coin to whatever minimum was needed for that remainder
              minCoinsNeeded[currentAmount] = Math.min(
                  minCoinsNeeded[currentAmount],
                  minCoinsNeeded[currentAmount - coinValue] + 1
              );
          }
      }
  }

  // Step 5: If we never updated the value (still Infinity), it's impossible
  return minCoinsNeeded[amount] === Infinity ? -1 : minCoinsNeeded[amount];
}

/** --------------------------------------------- OR --------------------------------------------- */


var coinChange = function(coins, amount) {
  // ---------------------------
  // Problem recap (short)
  // ---------------------------
  // Given coin denominations `coins` (unlimited supply of each),
  // find the minimum number of coins needed to sum up to `amount`.
  // If it's impossible, return -1.
  //
  // This is a classic dynamic programming problem (unbounded knapsack style).
  // We build up answers for all sub-amounts from 0..amount and reuse them.
  //
  // Note: Greedy can fail (example: coins = [1,4,6], target = 9).
  // A greedy choice of 6 first leads to 6+1+1+1 (4 coins) vs optimal 4+4+1 (3 coins).

  // ---------------------------
  // DP array explanation
  // ---------------------------
  // dp[x] will hold the minimum number of coins required to make amount x.
  // - We use `amount + 1` slots so we can index dp[amount].
  // - Initialize with Infinity to represent "not reachable yet".
  // - dp[0] = 0 because zero coins are needed to make amount 0.
  let dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0; // base case: no coins needed to make amount 0

  // ---------------------------
  // Loop order and reason
  // ---------------------------
  // Outer loop: iterate over each coin.
  // Inner loop: iterate over target sub-amounts j from coin..amount.
  //
  // Why coin outer and j from coin → amount?
  // 1) It expresses the "unlimited usage" of a single coin cleanly:
  //    when processing a coin value `c`, we allow multiple uses of `c`
  //    because j increases and dp[j - c] may already reflect using c.
  // 2) This ordering guarantees we consider combinations in a consistent
  //    order (useful if you also need to reconstruct the chosen coins later).
  // 3) For the "minimum coins" result this ordering is valid. (You could also
  //    do amount-outer and coin-inner; both produce correct min values — see note below.)
  //
  // Starting j at `coin`:
  // - If j < coin, we cannot use this coin to make j (coin is too large).
  // - So the earliest amount affected by this coin is j = coin itself.
  //
  // Example: coin = 5, we start j = 5. dp[5] can become 1 (from dp[0] + 1).
  for (let coin of coins) {
      // j represents the current sub-amount we are solving for.
      for (let j = coin; j <= amount; j++) {
          // If dp[j - coin] is Infinity it means (j - coin) is not reachable,
          // so the Math.min will ignore that path effectively.
          //
          // Recurrence:
          // - If we use this coin (1 coin), then we need dp[j - coin] more coins
          //   to make the remainder; total becomes dp[j - coin] + 1.
          // - If we don't use this coin for amount j, dp[j] remains whatever it was.
          //
          // So dp[j] = min(old dp[j], 1 + dp[j - coin])
          dp[j] = Math.min(dp[j], 1 + dp[j - coin]);
      }
  }

  // If dp[amount] is still Infinity, no combination of coins makes amount.
  return dp[amount] === Infinity ? -1 : dp[amount];
};
