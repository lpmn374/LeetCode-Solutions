/**
 * @param {number} n
 * @return {string[]}
 */
var validStrings = function(n) {
    let result=[],current="";
    function backtracking(current){
        if (current.length===n){
            result.push(current);
            return;
        }
        backtracking(current+"1");
        if (current.length===0 || current[current.length-1]!=="0")
            backtracking(current+"0");
    }
    backtracking("");
    return result;
};