/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    let n=words.length, m=s.length;
    if(n!==m) return false;
    for(let i=0;i<n;i++)
        if (words[i][0]!==s[i]) return false;
    return true;
};