/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let count=0, start=s.length-1;
    while (s[start]===' ') start--;
    for(let i=start;i>=0;i--){
        if(s[i]===' ') break;
        count++;
    }
    return count;
};