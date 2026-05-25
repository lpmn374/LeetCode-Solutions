/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDegrees = function(matrix) {
    for(let i=0;i<matrix.length;i++)
        matrix[i]=matrix[i].reduce((acc,cur)=>acc+cur,0);
    return matrix;
};