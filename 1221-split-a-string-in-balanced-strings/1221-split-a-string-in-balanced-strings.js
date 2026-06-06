/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let countSub=0, countR=0, countL=0;
    for(let i=0;i<s.length;i++){
        if(s[i]==='R') countR++;
        else countL++;
        if(countR===countL){
            countSub++;
            countR=0;
            countL=0;
        }
    }
    return countSub;
};