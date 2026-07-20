/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    if (k===0) return grid;
    let n=grid.length, m=grid[0].length, total=n*m, result=Array.from({length:n},()=> Array(m).fill(0));
    for(let i=0;i<n;i++)
        for(let j=0;j<m;j++){
            let old1D=i*m+j, new1D=(old1D+k)%total, newR=Math.floor(new1D/m), newC=new1D%m;
            result[newR][newC]=grid[i][j];
        }
    return result;
};