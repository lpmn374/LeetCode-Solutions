/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    let isOpen=0, count=0, n=s.length;
    for(let i=0;i<n;i++){
        if(s[i]==='|') isOpen^=1;
        if(s[i]==='*' && isOpen===0) count++;
    }
    return count;
};