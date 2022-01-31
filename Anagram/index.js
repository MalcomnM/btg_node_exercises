/*
* GOAL: Write an algorithm to determine if two strings are an anagram.
* 
* An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
* using all the original letters exactly once without regard to capitalization, punctuation or spaces.
* 
* Expected Output:
* True
* False
* True
* False
* True
* False
* True
* False
* True
* False
* True
* False
* False
*/

const list = [
    {s1: "anagram", s2: "nag a ram"}, // True
    {s1: "skin", s2: "ski"}, //False
    {s1: "adobe", s2: "abode"}, // True
    {s1: "cat", s2: "scat"}, //False
    {s1: "binary", s2: "brainy"}, // True
    {s1: "four", s2: "five"}, //False
    {s1: "technology", s2: "Cony The Log"}, // True
    {s1: "technology", s2: "Tony The Log"}, //False
    {s1: "Stoic Form", s2: "Microsoft"}, // True
    {s1: null, s2: "cab"}, //False
    {s1: null, s2: null},  // True
    {s1: "abc", s2: null}, //False
    {s1: "aabb", s2: "aaba"}, //False
];