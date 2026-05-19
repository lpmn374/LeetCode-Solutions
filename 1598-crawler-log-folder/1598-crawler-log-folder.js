/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let result=0;
    for(let x of logs)
        if (x[1]==='.' && result>0) result-=1;
        else if (x[0]!=='.') result+=1;
    return result;
};