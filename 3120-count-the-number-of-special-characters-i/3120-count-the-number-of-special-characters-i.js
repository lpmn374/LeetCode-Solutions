/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    let count=0, lower=new Array(26).fill(0), upper=new Array(26).fill(0), firstLower='a'.charCodeAt(0), firstUpper='A'.charCodeAt(0);
    for(let i=0;i<word.length;i++)
        if(word[i]>='a' && word[i]<='z') lower[word[i].charCodeAt(0)-firstLower]++;
        else upper[word[i].charCodeAt(0)-firstUpper]++;
    for(let i=0;i<26;i++)
        if(lower[i]>0 && upper[i]>0) count++;
    return count;
};