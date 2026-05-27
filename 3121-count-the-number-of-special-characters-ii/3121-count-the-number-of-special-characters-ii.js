/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    let lower=new Array(26).fill(0), upper=new Array(26).fill(0), firstLower='a'.charCodeAt(0), firstUpper='A'.charCodeAt(0), count=0;
    for(let i=0;i<word.length;i++){
        if(word[i]>='A' && word[i]<='Z' && lower[word[i].charCodeAt(0)-firstUpper]!==0) upper[word[i].charCodeAt(0)-firstUpper]=1;
        else if (lower[word[i].charCodeAt(0)-firstUpper]===0){
            lower[word[i].charCodeAt(0)-firstUpper]=-1;
            upper[word[i].charCodeAt(0)-firstUpper]=1;
        }
        if (word[i]>='a' && word[i]<='z' && upper[word[i].charCodeAt(0)-firstLower]!==0)
            lower[word[i].charCodeAt(0)-firstLower]=-1;
        else if (lower[word[i].charCodeAt(0)-firstLower]!==-1) lower[word[i].charCodeAt(0)-firstLower]=1;
    }
    for(let i=0;i<lower.length;i++)
        if(lower[i]===1 && upper[i]===1)
            count++;
    return count;
};