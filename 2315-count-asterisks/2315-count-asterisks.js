/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    let isOpen=0, count=0, n=s.length;
    for(let i=0;i<n;i++)
        if(s[i]==='|') isOpen^=1;
        else if(s[i]==='*' && !isOpen) count++;
    return count;
};