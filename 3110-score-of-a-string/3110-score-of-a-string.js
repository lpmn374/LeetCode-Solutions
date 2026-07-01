/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let object={}, n=s.length, sum=0;
    for(let i=0;i<n-1;i++){
        if(!object[s[i]]) object[s[i]]=s.charCodeAt(i);
        if(!object[s[i+1]]) object[s[i+1]]=s.charCodeAt(i+1);
        let current=object[s[i]], next=object[s[i+1]];
        sum+=Math.abs(current-next);
    }
    return sum;
};