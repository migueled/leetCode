/*
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
*/
var canConstruct = function (ransomNote, magazine) {
    let h = {}

    for (let c of ransomNote) {
        h[c] = (h[c] || 0) + 1
    }

    for (let c of magazine) {
        if (h[c]) {
            h[c]--;
            if (h[c] === 0) {
                delete h[c];
            }
        }
    }

    return Object.keys(h).length == 0
};

console.log(canConstruct("aa", "ab"));