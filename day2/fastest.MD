Walkthrough — what each block is doing (plain language)

let min = prices[0];
Start by assuming the first day is the cheapest day we've seen so far. We’ll update this whenever we find a cheaper day.

let profit = 0;
Keep track of the best profit found so far. Zero means “no profitable sell yet.”

let buyDay = 0;
Remember the day index when min was found. We will use this as the buy day when computing profits.

for (let i = 0; i < prices.length; i++) { ... }
Check every day one-by-one. For each day:

If the current price is lower than min, update min and buyDay.

Compute how much you’d make if you sold today (current price − price on buyDay).
If that value is higher than profit, update profit.

return profit;
After scanning all days, return the largest profit you can make with a single buy and a single sell.

Short trace example (so viewers can follow)

Given prices = [7, 1, 5, 3, 6, 4]:

Day 0: min = 7, buyDay = 0, profit = 0

Day 1: prices[1] = 1 → new min = 1, buyDay = 1, profit still 0

Day 2: prices[2] = 5 → potential profit = 5 - 1 = 4 → profit = 4

Day 3: prices[3] = 3 → potential profit = 3 - 1 = 2 → profit stays 4

Day 4: prices[4] = 6 → potential profit = 6 - 1 = 5 → profit = 5

Day 5: prices[5] = 4 → potential profit = 4 - 1 = 3 → profit stays 5
Result → 5 (buy at day 1 price 1, sell at day 4 price 6)

Time & Space Complexity (simple and direct)

Time Complexity: O(n) — We loop through the price list once. Every day is visited exactly once and we do a constant amount of work per day.

Space Complexity: O(1) — Only a few variables (min, profit, buyDay, loop index) are used, no extra arrays or structures that grow with input size.