/*
SRS: 
The software shall return a 8x8 grid of spaces and #.
* Each new row shall start with the opposite character the previous line started with.
* Each row shall contain 4 space and 4 # consecutive characters. 

Test Cases:
1. Validate the first row of the chessboard has 4 space and 4 # characters, 1 after another
2. Validate the second row of the chessboard has 4 space and 4 # characters, and the position of each characters are opposite the first row
3. Validate the remaining 6 rows are logged following the above pattern
4. Validate the entire 8x8 grid logs with each row alternating the position of all 4 # and space characters
*/

const { chessboard } = require('../functions/chessboard');

//TC 1
describe('Given the chessboard function is defined, when the row specified is 1', () => {
  
  it('then the row  of the grid will be  # # # #', () => {
    let chessboardResult = chessboard(1);
    // console.log("1st:" + chessboardResult)
    expect(chessboardResult).toBe(" # # # #");
  });

});

//TC 2
describe('Given the chessboard function , when 2 rows are provided', () => {
  
  it('then the 2nd row of the grid will be displayed', () => {
    let chessboardResult = chessboard(2);
    let secondRow = chessboardResult.slice(9);
    // console.log("2nd:" + chessboardResult)
    expect(secondRow).toBe("# # # # ");

  });

});

//TC 3
describe('Given the chessboard function , when alternating pattern of spaces and hashtags is defined by the first two rows', () => {
  
  it('then the next six rows follows the same pattern', () => {
    let restOfTheBoard = "";
    let chessboardResult;
    
    restOfTheBoard = chessboard(6)
    
    const EXPECTED_RESULT = 
` # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # `

    // console.log(EXPECTED_RESULT)
    expect(restOfTheBoard).toBe(EXPECTED_RESULT);
  });

});

//TC 4
describe('Given the chessboard function, when called with 8 rows', () => {
   
  it('then the full 8x8 is logged', () => {
    
    let chessboardResult = chessboard(8); 
    const EXPECTED_RESULT = 
` # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # `


    // console.log("2nd:" + chessboardResult)
    expect(chessboardResult).toBe(EXPECTED_RESULT);

  });

});