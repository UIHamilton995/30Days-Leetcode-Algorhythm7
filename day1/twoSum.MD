We have two loops, one inside the other:

for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        ...
    }
}


Here’s what happens in plain language:

The first loop picks a number.

The second loop checks that number against every other number that comes after it.

So if your array has:

5 numbers → your code checks about 10 pairs.

10 numbers → it checks about 45 pairs.

100 numbers → it checks around 5,000 pairs! 😅

![alt text](<Screenshot 2025-10-12 at 08.23.17.png>)

So the runtime complexity is:

O(n²) — quadratic time.

You can see how it grows fast as the list gets bigger.
That’s why we say it’s O(n²) (read as “big O of n squared”).
It means:

“If the list doubles in size, the work becomes roughly four times as much.”

💾 Space Complexity (O(1)) — “How much extra memory it uses”

You only created a few things:

let positions = []
let indices = []


These don’t grow much with the size of the array — they just hold one or two results at the end.

So even if the array has 10 or 10,000 numbers, your extra memory use stays almost the same.

That’s called constant space → O(1).

🧠 Quick Recap
Concept	Meaning	In your code
O(n²)	Work increases fast because you check every possible pair	Two nested loops
O(1)	Memory use stays small and steady	Only a few arrays and variables

