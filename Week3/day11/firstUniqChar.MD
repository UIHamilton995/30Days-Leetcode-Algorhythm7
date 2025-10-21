⚔️ Comparing Both
| Version                | Time Complexity | Space Complexity | Notes                                    |
| ---------------------  | --------------- | ---------------- | ---------------------------------------- |
| `indexOf/lastIndexOf`  | O(n²)           | O(1)             | Simple but inefficient for large strings |
| `Optimized (HashMap)`  | O(n)            | O(k)             | Slightly more memory but *way* faster    |

💡 Why the Optimized Version Wins

The indexOf version re-scans the string again and again — it doesn’t remember what it saw before.
The optimized version remembers (via a frequency map) — so every character is processed only once.

That memory tradeoff (a small O(k) space) gives a huge speed benefit.

🧠 Real-Life Analogy

Imagine you’re managing a queue of customers waiting to be served:

First, you take attendance — count how many times each name appears.
(That’s your freq object.)

Then, you scan the line again to find the first person who came alone (appears once).
(That’s your second loop checking freq[name] === 1.)

If everyone came with friends (duplicates), you say “no one came alone” → return -1.

💼 Real Project Applications

This pattern appears a lot in real systems:

🧾 Finance: Detect the first unique transaction in a stream of duplicate ones.

🧍 User Analytics: Identify the first unique visitor in a session list.

🛒 E-commerce: Find the first product added only once to a user’s cart.

🔍 Text Analysis: Find the first unique word or character in text processing (useful in NLP).