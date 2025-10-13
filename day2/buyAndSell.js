function maxProfit(prices) {
  // initialize minPrice as the first price (we can't use Math.min directly on an array)
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
      // if we find a price smaller than the previous minPrice, we update it
      if (prices[i] < minPrice) {
          minPrice = prices[i];
      }

      // calculate potential profit from current price and the current minPrice
      let currentProfit = prices[i] - minPrice;

      // update maxProfit if the new profit is greater
      if (currentProfit > maxProfit) {
          maxProfit = currentProfit;
      }
  }

  return maxProfit;
};

/*-------------------------------------------- OR -------------------------------------------------*/

var maxProfit = function (prices) {
  // 🧠 We start by assuming the first day's price is our minimum buy price
  // (We'll keep updating this value whenever we find a cheaper day to buy)
  let minValue = prices[0];

  // 💰 Initialize our profit to 0 — this represents the best profit we've seen so far.
  let profit = 0;

  // 🚀 Now, loop through the rest of the days (starting from day 1, since day 0 is already in minValue)
  for (let i = 1; i < prices.length; i++) {

      // 🕵️‍♂️ Step 1: Check if today's price is cheaper than any we've seen before.
      // If yes, we update our minValue — meaning we just found a better buying opportunity.
      minValue = Math.min(prices[i], minValue);

      // 💹 Step 2: Check how much profit we’d make if we sold today.
      // (today's price - the cheapest price seen so far)
      let todayProfit = prices[i] - minValue;

      // 🧮 Step 3: If that profit is higher than our best profit so far, we update it.
      // That way, profit always holds the maximum possible profit up to this point.
      profit = Math.max(todayProfit, profit);
  }

  // 🎯 Step 4: After checking all days, return the highest profit found.
  // If prices only dropped every day, profit will remain 0.
  return profit;
};

/*-------------------------------------------- OR -------------------------------------------------*/

var maxProfit = function(prices) {
  // Initialize `min` to the price on the first day.
  // This represents the cheapest price we've seen so far (our current best buy price).
  let min = prices[0];

  // `profit` will hold the best profit we've found so far.
  // Start at 0 because we haven't made any trades yet.
  let profit = 0;

  // `buyDay` records the index (day) where we would buy at `min`.
  // This helps us compute profit as current price - price on buyDay.
  let buyDay = 0;

  // Loop through every day in the prices array.
  // We use `i` as the current day index and prices[i] as the price on that day.
  for (let i = 0; i < prices.length; i++) {

      // If today's price is lower than the smallest price we've seen so far:
      if (prices[i] < min) {
          // Update `min` to this new lower price — this is a better buying opportunity.
          min = prices[i];

          // Update `buyDay` to the current day index so future profit calculations use this day.
          buyDay = i;
      }

      // Calculate the profit we would make **if we sold today** after buying on `buyDay`.
      // Then compare it with `profit` (the best profit we've seen so far).
      // If today's sell gives more profit, update `profit`.
      if (profit < (prices[i] - prices[buyDay])) {
          // Store the new, higher profit.
          profit = prices[i] - prices[buyDay];
      }
  }

  // After checking every day, `profit` is the maximum profit achievable with one buy and one sell.
  // If prices only fell every day, profit remains 0 (no profitable trade).
  return profit;
};
