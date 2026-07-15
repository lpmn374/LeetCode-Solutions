/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    let n=grid.length, m=grid[0].length, arr=new Array(n**2 +1).fill(0), a, b;
    for(let i=0;i<n;i++)
        for(let j=0;j<m;j++){
            let num=grid[i][j];
            arr[num]++;
            if(arr[num]===2) a=num; 
        }
    for(let i=1;i<=n**2;i++)
        if(arr[i]===0){
            b=i;
            break;
        }
    return [a,b];
    
};