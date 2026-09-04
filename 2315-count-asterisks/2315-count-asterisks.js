/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    let isOpen=false, count=0, n=s.length;
    for(let i=0;i<n;i++){
        if(s[i]==='|')
            if (isOpen) isOpen=false;
            else isOpen=true;
        if(s[i]==='*' && !isOpen) count++;
    }
    return count;
};