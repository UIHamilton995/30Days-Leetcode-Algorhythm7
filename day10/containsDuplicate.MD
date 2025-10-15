🧮 Are 2 and 3 the Same in Time and Space Complexity?

✅ Yes — they are identical in Big-O terms.

| Metric               | Loop Version | One-Liner Version |
| :------------------- | :----------- | :---------------- |
| **Time Complexity**  | O(n)         | O(n)              |
| **Space Complexity** | O(n)         | O(n)              |



🧠 Real-Life Analogy

Imagine a guest registration form:

nums = all people who filled the form.

You write their names into a "unique name list" (Set).

If your unique name list has fewer names than the number of forms submitted —
clearly, someone registered twice ✅

That’s literally what .size < .length checks.

💼 Real Project Application

This one-liner pattern is common in production-level checks:

✅ Database validation: Confirm no duplicate primary keys before import.

✅ API payload validation: Ensure unique product IDs or email addresses.

✅ Data cleansing scripts: Quickly check if incoming datasets contain duplicates.

It’s concise, expressive, and perfect when performance is acceptable and readability is key.


| Scenario                          |  Recommended                                                  |
| **Performance-critical loops**    | (like within a huge pipeline)   | Use the first version — it can       `return` early as soon as a duplicate is found. |
| **Readable one-off check**        | (like LeetCode or validation logic) | Use the one-liner — clean, expressive, and equally efficient in Big-O terms.   |
