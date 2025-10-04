// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Output :: "Position of alphabet: 1"

// Note: Only lowercased English letters are tested

export function position(alphabet: string): string {
  let alphabetArray: string[] = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let resultado: number;

  resultado = alphabetArray.indexOf(alphabet) + 1;

  return `Position of alphabet: ${resultado}`;
}

console.log(position("z"));

// position("a"),"Position of alphabet: 1"
// position("z"),"Position of alphabet: 26
