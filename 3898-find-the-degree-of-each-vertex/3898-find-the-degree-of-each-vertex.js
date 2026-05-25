/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDegrees = function(matrix) {
    let result=[];
    for(let i=0;i<matrix.length;i++)
        result.push(matrix[i].reduce((acc,cur)=>acc+cur,0));
    return result;
};