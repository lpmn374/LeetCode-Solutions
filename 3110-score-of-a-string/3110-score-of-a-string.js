/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let object={}, n=s.length, first='a'.charCodeAt(0), sum=0;
    for(let i=0;i<26;i++)
        object[String.fromCharCode(i+first)]= i+first;
    for(let j=0;j<n-1;j++)
        sum+=Math.abs(object[s[j]]-object[s[j+1]]);
    return sum;
};