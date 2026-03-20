/*-------------------------------------------------------------
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
-----------------------------------------------------------------*/
function chessboard(rows) {
    let board = "";
    const SPACE = " ";
    const HASHTAG = "#";


    for (let j = 1; j <= rows; j++) {
         
        for (let i = 0; i < 4; i++) {

            // 1 3 5 7
            if (j % 2 != 0){
                board += SPACE;
                board += HASHTAG;
            }

            // 2 4 6 8
            if (j % 2 === 0){
                board += HASHTAG;
                board += SPACE;
            }

        }
       if(j < rows ){
            board+= "\n";
        }

    }




    

    return board;
}


module.exports = { chessboard };
