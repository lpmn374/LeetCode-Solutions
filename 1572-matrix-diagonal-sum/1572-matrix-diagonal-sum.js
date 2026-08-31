/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let n=mat.length, m=n, sum=0;
    if (n===1) return mat[0][0];
    for(let i=0;i<n;i++) sum+=mat[i][i]+mat[i][n-i-1];
    if (n>1 && n%2!==0){
        let k=Math.floor(n/2);
        sum-=mat[k][k];
    }
    return sum;
};
