/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    let lower=new Array(26).fill(0), upper=new Array(26).fill(0), firstLower='a'.charCodeAt(0), firstUpper='A'.charCodeAt(0), count=0;
    for(let i=0;i<word.length;i++){
        let letter=word[i].charCodeAt(0);
        if(word[i]>='A' && word[i]<='Z'){
            upper[letter-firstUpper]=1;
            if(lower[letter-firstUpper]===0) lower[letter-firstUpper]=-1;
        }
        if (word[i]>='a' && word[i]<='z' && upper[letter-firstLower]===0)
            lower[letter-firstLower]=1;
        else lower[letter-firstLower]=-1;
    }
    for(let i=0;i<lower.length;i++)
        if(lower[i]===1 && upper[i]===1)
            count++;
    return count;
};