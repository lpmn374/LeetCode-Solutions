/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
    let max=Number(n[0]);
    for(let i=1;i<n.length;i++){
        let currentNum=Number(n[i]);
        if(currentNum>max) max=currentNum;
    }
    return max;
};