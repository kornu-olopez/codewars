// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

export const fakeBin = (x: string): string => {
  let finalString: number[] = [];
  let arrayString = x.split("");

  for (let i = 0; i < arrayString.length; i++) {
    if (Number(arrayString[i]) < 5) {
      finalString.push(0);
    } else {
      finalString.push(1);
    }
  }

  return finalString.join("");
};

console.log(fakeBin("45385593107843568")); // 01011110001100111
