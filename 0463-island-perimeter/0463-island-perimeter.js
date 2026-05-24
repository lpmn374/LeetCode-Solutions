/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    const rows=grid.length, cols=grid[0].length;
    let count=0, neighbor=0;
    // const visited=Array.from({length:rows},()=>new Array(cols).fill(false));
    for(let r=0;r<rows;r++)
        for(let c=0;c<cols;c++)
            if(grid[r][c]===1){
                count++;
                if(r-1>=0 && grid[r-1][c]===1) neighbor++;
                if(r+1<rows && grid[r+1][c]===1) neighbor++;
                if(c-1>=0 && grid[r][c-1]===1) neighbor++;
                if(c+1<cols && grid[r][c+1]===1) neighbor++;
            }
    return count*4-neighbor;
};