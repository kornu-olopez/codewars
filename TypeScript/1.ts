// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

// assert.equal(past(0, 1, 1), 61000);
//     assert.equal(past(1, 1, 1), 3661000);
//     assert.equal(past(0, 0, 0), 0);
//     assert.equal(past(1, 0, 1), 3601000);
//     assert.equal(past(1, 0, 0), 3600000);

export function past(h: number, m: number, s: number): number {
  return 0;
}

console.log(past(0, 1, 1)); 
