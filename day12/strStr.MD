🧠 Real-Life Analogy

Think of haystack as a film reel and needle as a short clip you’re trying to match frame by frame.
You start at frame 0, cut out a short piece the same length as your target clip, and check — if the sequence matches, that’s the timestamp you were looking for.

💼 Real Project Applications

Search features: finding substrings in text files, documents, or logs.

Autocomplete systems: matching user-typed fragments against database entries.

Data cleaning tools: detecting if a specific keyword exists within a long text field (like scanning CSV entries).

Security scanning: searching for forbidden words, patterns, or tokens in request data.

⏱️ Time & Space Complexity

Time: O(n × m) — for every index in haystack, we may compare up to needle.length characters.

Space: O(1) — we’re not using extra data structures; only temporary substring variables.

