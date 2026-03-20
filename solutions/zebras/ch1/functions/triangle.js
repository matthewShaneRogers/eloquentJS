// ─────────────────────────────────────────────────────────────────
// Eloquent JS — mob programming exercise implementations
//
// RED → GREEN → REFACTOR
// 1. A mob member writes a failing spec in spec/exercises.spec.js
// 2. Next member writes just enough code here to make it pass
// 3. Next member refactors while keeping tests green
// ─────────────────────────────────────────────────────────────────

/*
Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
#######
*/
function triangle(a) {
    let resultStr = "";
    // how many rows
    for (let j = 1; j <= a; j++) {
        // TODO ADD LOGGING HERE
        // how long is the row
        for (let i = 1; i <= j; i++) {
            resultStr = resultStr + "#";
            //resultStr = `${resultStr}#`;
            console.log("resultStr :\n", resultStr)
        }
        // resultStr = resultStr + "\n" 
    } 

    console.log("End of Triangle function: ", resultStr);
    return resultStr;

}

module.exports = { triangle };
