🧠 Real-life Analogy

Imagine you’re a hacker planning to “loot” cryptocurrency vaults on a blockchain network.
Each vault is heavily monitored — if you hit two consecutive ones, the system alerts the security bots.
So, you have to plan:

“Should I hack this vault and skip the last one, or skip this vault and keep what I’ve earned so far?”

That’s this exact algorithm — maximizing your total gain while avoiding consecutive hits.

⚙️ Real Dev Applications

Budget optimization: Choosing which financial investments to take when consecutive ones have risk overlap.

Server load balancing: Activating alternating servers in a cluster to avoid overheating adjacent systems.

Scheduling non-overlapping jobs: Choosing which tasks to run when adjacent ones conflict.


🧾 Complexity Analysis
| Measure              | Description                                                     | Complexity |
| -------------------- | --------------------------------------------------------------- | ---------- |
| **Time Complexity**  | We loop once through all houses (no nested loops).              | **O(n)**   |
| **Space Complexity** | We use only two variables (`prev1`, `prev2`) instead of arrays. | **O(1)**   |
