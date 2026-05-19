/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    return logs.reduce((acc,curr)=>(curr[1]==='.' && acc>0)?acc-1:(curr[0]!=='.')?acc+1:acc,0);
};