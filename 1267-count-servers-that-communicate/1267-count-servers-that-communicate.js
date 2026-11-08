/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function(grid) {
    let m=grid.length, n=grid[0].length, count=0, row=new Array(m).fill(0), col=new Array(n).fill(0);
    for(let i=0;i<m;i++)
        for(let j=0;j<n;j++)
            if(grid[i][j]===1){
                row[i]++;
                col[j]++;
            }
    for(let i=0;i<m;i++)
        for(let j=0;j<n;j++)
            if(grid[i][j]===1 && (row[i]>1 || col[j]>1)) count++;
    return count;
};