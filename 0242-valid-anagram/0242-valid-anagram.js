/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!==t.length) return false;
    let tempArr=new Array(26).fill(0);
    for(let x of s) tempArr[x.charCodeAt(0)-97]++;
    for(let y of t){
        tempArr[y.charCodeAt(0)-97]--;
        if (tempArr[y.charCodeAt(0)-97]<0) return false;
    }
    return true;
};