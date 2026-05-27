/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    let arr=new Array(26).fill(0), firstLower='a'.charCodeAt(0), firstUpper='A'.charCodeAt(0), count=0;
    for(let i=0;i<word.length;i++){
        let letter=word[i].charCodeAt(0);
        if(word[i]>='a' && word[i]<='z')
            if(arr[letter-firstLower]===0 || arr[letter-firstLower]===1) arr[letter-firstLower]=1; 
            else arr[letter-firstLower]=-1;
        else if(word[i]>='A' && word[i]<='Z')
            if(arr[letter-firstUpper]===0) arr[letter-firstUpper]=-1;
            else if(arr[letter-firstUpper]===1) arr[letter-firstUpper]=2;
    }
    for(let i=0;i<arr.length;i++)
        if(arr[i]===2) count++;
    return count;
};