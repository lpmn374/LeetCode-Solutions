/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let arr=new Array(26).fill(0);
    for(let i=0;i<s.length;i++)
        arr[s[i].charCodeAt(0)-'a'.charCodeAt(0)]++;
    for(let i=0;i<s.length;i++)
        if (arr[s[i].charCodeAt(0)-'a'.charCodeAt(0)]===1) return i;
    return -1;
};