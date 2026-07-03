/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(!haystack.includes(needle)) return -1;
    let start=0, isFound=false;
    while(start<haystack.length){
        for(let i=0;i<needle.length;i++){
            if(haystack[start+i]!==needle[i]) break;
            if(i===needle.length-1) isFound=true;
        }
        if (isFound) return start;
        start++;
    }
    return -1;
};