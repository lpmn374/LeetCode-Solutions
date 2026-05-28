/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let count=0;
    for(let x of hours)
        if(x>=target) count++;
    return count;
};