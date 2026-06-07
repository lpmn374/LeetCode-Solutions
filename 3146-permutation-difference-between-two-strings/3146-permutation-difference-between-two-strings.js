/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function(s, t) {
    let arr=new Array(26).fill(0), char, sum=0;
    for(let i=0;i<s.length;i++){
        char=s[i].charCodeAt(0)-'a'.charCodeAt(0);
        arr[char]=i;
    }
    for(let i=0;i<t.length;i++){
        char=t[i].charCodeAt(0)-'a'.charCodeAt(0);
        sum+= Math.abs(i-arr[char]);
    }
    return sum;
};