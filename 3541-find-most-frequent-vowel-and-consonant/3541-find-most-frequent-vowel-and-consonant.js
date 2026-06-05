/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let arr=new Array(26).fill(0), maxFreqCons=0, maxFreqVow=0;
    let isVowel = (char) => {return char==='a'|| char==='e' || char==='i'|| char==='o'|| char==='u';};
    for(let i=0;i<s.length;i++){
        let index=s[i].charCodeAt(0)-'a'.charCodeAt(0);
        arr[index]++;
        if(isVowel(s[i]) && arr[index]>maxFreqVow)    maxFreqVow=arr[index];
        if(!isVowel(s[i]) && arr[index]>maxFreqCons) maxFreqCons=arr[index];
    }
    return maxFreqVow+maxFreqCons;
};