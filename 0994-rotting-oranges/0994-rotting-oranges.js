/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const rows= grid.length, cols=grid[0].length;
    const directions = [
        [-1,0],
        [1,0],
        [0,-1],
        [0,1]
    ];
    let queue= [], freshOranges=0, timer=0;
    for(let r=0;r<rows;r++)
        for(let c=0;c<cols;c++)
            if(grid[r][c]===2) queue.push([r,c]);
            else if(grid[r][c]===1) freshOranges++;
    if(freshOranges===0) return 0;
    while(queue.length>0 && freshOranges>0){
        timer++;
        let currentRotten=queue.length;
        for(let i=0;i<currentRotten;i++){
            let [r,c]=queue.shift();
            for(let [x,y] of directions){
                let newR=r+x, newC=c+y;
                if (newR>=0 && newR<rows && newC>=0 && newC<cols && grid[newR][newC]===1){
                    grid[newR][newC]=2;
                    freshOranges--;
                    queue.push([newR,newC]);
                }
            }
        }
    }
    return freshOranges===0?timer:-1;
};