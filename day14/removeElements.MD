🧠 Walkthrough Example

Suppose we have:
head = [1 → 2 → 6 → 3 → 4 → 5 → 6]
and val = 6.

Traversal Logic:
| Step | Current Node (`node.val`) | Action                             | Resulting List            |
| :--- | :------------------------ | :--------------------------------- | :------------------------ |
| 1    | 1                         | Keep it (`pre = node`)             | 1 → 2 → 6 → 3 → 4 → 5 → 6 |
| 2    | 2                         | Keep it (`pre = node`)             | 1 → 2 → 6 → 3 → 4 → 5 → 6 |
| 3    | 6                         | Remove it (`pre.next = node.next`) | 1 → 2 → 3 → 4 → 5 → 6     |
| 4    | 3                         | Keep it (`pre = node`)             | 1 → 2 → 3 → 4 → 5 → 6     |
| 5    | 4                         | Keep it (`pre = node`)             | 1 → 2 → 3 → 4 → 5 → 6     |
| 6    | 5                         | Keep it (`pre = node`)             | 1 → 2 → 3 → 4 → 5 → 6     |
| 7    | 6                         | Remove it                          | 1 → 2 → 3 → 4 → 5         |

✅ Final output: [1, 2, 3, 4, 5]

🧩 Real-Life Analogy

Think of a project hiring list where every candidate’s profile is represented as a node.

Each candidate (node) has a “score” (val).

If a candidate’s score matches the disqualifying value (say, “failed background check” = val),
the HR manager (pre) simply skips that profile by linking directly to the next person.

You start from a “dummy entry” (like a virtual HR system log) before the first candidate,
so even if the first person on the list is disqualified, you can easily remove them
without losing track of the rest.

💼 Real Developer Project Applications

This logic is foundational in many real-world systems:

Database Cleanup
Removing expired or flagged records from a linked data structure.

Example: Deleting inactive user sessions from an in-memory linked list.

Blockchain / Transaction Chains
Filtering out invalid transactions in a block structure that’s linked node-by-node.

Game Development
Removing dead characters or completed tasks from a linked structure of game objects.

Memory Management (Garbage Collection)
Removing unreferenced memory nodes or objects during cleanup cycles.

Essentially, any process that requires filtering out unwanted elements while keeping the chain intact uses a similar logic.

⚙️ Time & Space Complexity
Aspect	                Explanation	                                            Complexity
Time Complexity	        We traverse each node once. For each node, operations (comparison and pointer change) are O(1).	                                                              O(n)
Space Complexity	      We only used a few pointers (dummy, pre, node), no additional data structures.	                                                                   O(1)

✅ Same efficiency as the previous version — both are linear-time, constant-space.

🔥 TL;DR Summary

Both versions achieve O(n) time and O(1) space.

This one is more pointer-flexible, giving more direct control over when pre updates.

The dummy node pattern is a universal trick for linked list manipulations — you’ll see it again in problems like:

->  Remove Nth Node From End of List

->  Reverse Linked List

->  Merge Two Lists