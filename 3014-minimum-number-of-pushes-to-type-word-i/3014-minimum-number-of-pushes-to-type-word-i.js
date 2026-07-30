/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    let count=new Array(26).fill(0), n=word.length, a='a'.charCodeAt(0);
    for(let i=0;i<n;i++)
        count[word.charCodeAt(i)-a]++;
    count.sort((a,b)=>b-a);
    let turn=1, sum=0;
    for(let i=0;i<26;i++){
        if(count[i]===0) break;
        if(i>0 && i%8===0) turn++;
        sum+=count[i]*turn;
    }
    return sum;
};