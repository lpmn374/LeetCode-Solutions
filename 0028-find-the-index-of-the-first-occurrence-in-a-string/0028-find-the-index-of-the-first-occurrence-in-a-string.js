/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(!haystack.includes(needle)) return -1;
    let isFound=false, hLen=haystack.length, nLen=needle.length;
    for(let start=0; start<hLen; start++)
        for(let i=0;i<nLen;i++){
            if(haystack[start+i]!==needle[i]) break;
            if(i===needle.length-1) return start;
        }
};