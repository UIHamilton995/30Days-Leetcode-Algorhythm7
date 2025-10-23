🧰 Real-World Software Analogy

This problem reflects resource optimization — a major part of software and systems engineering.

Examples:

Cloud Billing Optimization

You’re selecting AWS instance types (₦1, ₦2, ₦5) to meet a performance target (₦11 units).

You want the fewest (cheapest) combination that reaches the goal.

Inventory Packaging

A logistics app decides the fewest box sizes to fit items of a certain volume.

Payment Systems

Currency disbursement machines (ATMs) minimize the number of notes given to reduce jam risk.

This logic pattern (break down → find smallest/biggest combo → memoize) reappears everywhere — from pathfinding, cache planning, to machine learning hyperparameter tuning.

⏱️ Time & Space Complexity
Approach	Time Complexity	Space Complexity	Notes
Brute Force (Recursive)	Exponential, roughly O(c^a) where c = #coins, a = amount	O(a) (recursion stack)	Very slow
Dynamic Programming	O(amount × coins.length)	O(amount)	Efficient and optimal

So for example, with coins [1, 2, 5] and amount 11, we only loop around 33 steps.

🧩 Summary
Concept	Key Idea
DP State	dp[x] = min coins to make amount x
Transition	dp[x] = min(dp[x], dp[x - coin] + 1)
Base Case	dp[0] = 0
Answer	dp[amount] or -1 if impossible