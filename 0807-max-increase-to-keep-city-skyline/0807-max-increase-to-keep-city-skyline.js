/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
    let count=0, ruleRow=[], ruleCol=[], maxRow=0, maxCol=0;
    for(let i=0;i<grid.length;i++){
        maxRow=grid[i][0];
        for(let j=1;j<grid[0].length;j++)
            if(grid[i][j]>maxRow) maxRow=grid[i][j];
        ruleRow.push(maxRow);
    }
    for(let i=0;i<grid[0].length;i++){
        maxCol=grid[0][i];
        for(let j=1;j<grid.length;j++)
            if(grid[j][i]>maxCol) maxCol=grid[j][i];
        ruleCol.push(maxCol);
    }
    for(let i=0;i<grid.length;i++)
        for(let j=0;j<grid[0].length;j++)
            count+= Math.min(ruleRow[i], ruleCol[j]) - grid[i][j];
    return count;    
};