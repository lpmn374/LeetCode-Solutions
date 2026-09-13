/**
 * @param {string} s
 * @return {string}
 */
var reverseByType = function(s) {
    let n=s.length, arrL=[], arrS=[];
    for(let i=n-1;i>=0;i--)
        if(s[i]>='a' && s[i]<='z') arrL.push(s[i]);
        else arrS.push(s[i]);
    let indexL=0, indexS=0, result=[];
    for(let i=0;i<n;i++)
        if(s[i]>='a' && s[i]<='z') result.push(arrL[indexL++]);
        else result.push(arrS[indexS++]);
    return result.join('');
};