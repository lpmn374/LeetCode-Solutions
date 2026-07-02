/**
 * @param {number[][]} grid
 * @param {number} health
 * @return {boolean}
 */
var findSafeWalk = function(grid, health) {
    let rows=grid.length, cols=grid[0].length, dist=Array.from({length:rows}, ()=>Array(cols).fill(Infinity)), startCost=grid[0][0], queue=[[0,0]];
    if(startCost>=health) return false;
    const dirs=[[0,-1],[0,1],[-1,0],[1,0]];
    dist[0][0]=startCost;
    while(queue.length>0){
        let [r,c] = queue.shift();
        for(let [dr,dc] of dirs){
            let nr=r+dr, nc=c+dc;
            if(nr>=0&&nr<rows&&nc>=0&&nc<cols){
                let newCost=dist[r][c]+grid[nr][nc];
                if(newCost<health&& newCost<dist[nr][nc]){
                    dist[nr][nc]=newCost;
                    queue.push([nr,nc]);
                }
            }
        }
    }
    return dist[rows-1][cols-1]<health;
};