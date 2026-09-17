/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let n=word1.length, m=word2.length, len=n+m, word="", indexI=0, indexJ=0;
    for(let i=0;i<len;i++)
        if((i%2===0 || indexJ>=m) && indexI<n) word+=word1[indexI++];
        else word+=word2[indexJ++];
    return word;
};