/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let isFound=false;
    for(let start=0; start<haystack.length; start++)
        for(let i=0;i<needle.length;i++){
            if(haystack[start+i]!==needle[i]) break;
            if(i===needle.length-1) return start;
        }
    return -1;
};