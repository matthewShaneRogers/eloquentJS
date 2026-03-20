const { isPangram } = require('../functions/pangram');

/*

SRS: The software shall return a string which contains every letter of the alphabet 

Test Cases:
Negative: check if one of the alphabet isn't used that false is returned
Positive: check if every letter of the alphabet is used true is returned
Edge: 

*/

//TC 1
describe('Given sentence, when isPanagram validates if the sentence is a pangram ', () => {
  
  it('then it will return true when the sentence is a pangram', () => {
    let sentence = "The quick brown fox jumps over the lazy dog";
    let result = isPangram(sentence);
    expect(result).toBeTrue();
  });

});

// describe('Given sentence, when isPanagram validates if the sentence is NOT a pangram ', () => {
  
//   it('then it will return false when the sentence is NOT a pangram', () => {
//     let sentence = "The quick brown fox is happy";
//     let result = isPangram(sentence);
//     expect(result).toBeFalse();
//   });

// });
