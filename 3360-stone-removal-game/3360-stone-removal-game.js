/**
 * @param {number} n
 * @return {boolean}
 */
var canAliceWin = function(n) {
    let turn=10;
    while(n>=0) n-=turn--;
    return turn%2===0?true:false;
};
