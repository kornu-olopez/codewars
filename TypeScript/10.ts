// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

export function isIsogram(str: string): boolean {
    return str.toLocaleLowerCase().split("").length === new Set(str.toLocaleLowerCase().split("")).size
}

console.log(isIsogram("Dermatoglyphics"));  // * --> true
console.log(isIsogram("isogram"));          // * --> true
console.log(isIsogram("moOse"));            // * --> false
console.log(isIsogram("aba"));              // * --> false
