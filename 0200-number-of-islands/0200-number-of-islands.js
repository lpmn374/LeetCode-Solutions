/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const rows=grid.length;
    const cols=grid[0].length;
    const visited= Array.from({length:rows},()=>new Array(cols).fill(false));
    let countIslands=0;
    function dfs(r,c){
        if(r<0 || r>=rows || c<0 || c>=cols) return;
        if (grid[r][c]==="0" || visited[r][c]) return;
        visited[r][c]=true;
        dfs(r-1,c);
        dfs(r+1,c);
        dfs(r,c-1);
        dfs(r,c+1);
    }
    for(let r=0;r<rows;r++)
        for(let c=0;c<cols;c++)
            if(grid[r][c]==="1" && !visited[r][c]){
                countIslands++;
                dfs(r,c);
            }
    return countIslands;
    
};