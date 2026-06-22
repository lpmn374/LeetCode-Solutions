/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxSum = function(grid) {
    let headLine=0, current=0, max=0;
    while(headLine+2<grid.length){
        let startHead=0, head=0, body=0, foot=0;         
        for(let i=startHead;i<=startHead+2;i++){
            head+=grid[headLine][i];
            foot+=grid[headLine+2][i];            
        }
        body=grid[headLine+1][startHead+1];
        current=head+foot+body;
        if (current>max) max=current;      
        while(startHead+2<grid[0].length){
            startHead++;
            head=head-grid[headLine][startHead-1]+grid[headLine][startHead+2];                foot=foot-grid[headLine+2][startHead-1]+grid[headLine+2][startHead+2];
            body=grid[headLine+1][startHead+1];
            current=head+foot+body;
            if (current>max) max=current;            
        }
        headLine++;
    }
    return max;
};