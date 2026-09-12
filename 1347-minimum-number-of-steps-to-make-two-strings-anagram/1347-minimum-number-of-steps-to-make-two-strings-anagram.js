/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    let arr=new Array(26).fill(0), n=s.length, count=0, a='a'.charCodeAt(0);
    for(let i=0;i<n;i++)
        arr[s.charCodeAt(i)-a]++;
    for(let i=0;i<n;i++)
        arr[t.charCodeAt(i)-a]--;
    for(let i=0;i<26;i++)
        if(arr[i]>0) count+=arr[i];
    return count;
};