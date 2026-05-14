/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    const myMap = new Map ([["X++",1],["++X",1],["X--",-1],["--X",-1]]);
    return operations.reduce((sum,x)=> sum + myMap.get(x),0);
};