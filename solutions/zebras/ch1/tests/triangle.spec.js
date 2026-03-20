// ─────────────────────────────────────────────────────────────────────────────
// spec/exercises.spec.js
//
// MOB WORKFLOW — rotate after each failing spec is added:
//   Driver writes the next `it(...)` block  →  passes keyboard
//   Next driver makes it green              →  passes keyboard
//   Next driver refactors if needed         →  passes keyboard  →  repeat
// ─────────────────────────────────────────────────────────────────────────────
const { triangle } = require('../functions/triangle');

xdescribe('Given input to triangle function , when the input is greater than 0', () => {
  it('then the amount of # will be the count', () => {
    let result = triangle(1);
    expect(result).toBe("#");
    console.log("\tresult:", result);
  });
});

describe('Given input to triangle function, when the input is 0', () => {
  it('then console.log outputs one new line with one # on a new line', () => {
    const expectedResult = "#";


    let result = triangle(1);
    expect(result).toBe(expectedResult);

    console.log("Final result: \n","Actual result: ", result, "\n Expected Result: ", expectedResult);
  });
});

xdescribe('Given input to triangle function, when the input is 7', () => {
  it('then console.log outputs seven new lines with incrementing one # per new line', () => {
    const expectedResult = 
`#
##
###
####
#####
######
#######`;

    let result = triangle(1);
    expect(result).toBe(expectedResult);

    console.log("Final result: \n",result, expectedResult);
  });
});