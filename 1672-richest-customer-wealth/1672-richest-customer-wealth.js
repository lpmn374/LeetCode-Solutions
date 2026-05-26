/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let max=0, current=0;
    for(let i=0;i<accounts.length;i++){
        current = accounts[i].reduce((acc,cur)=> acc+cur,0);
        if(max < current) max=current;
    }
    return max;
};