/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var stringHash = function(s, k) {
    let result="", a='a'.charCodeAt(0), n=s.length, count=k, sum=0;
    for(let i=0;i<n;i++){
        sum+=s.charCodeAt(i)-a;
        count--;
        if(count===0){
            result+=String.fromCharCode(a+sum%26);
            count=k;
            sum=0;
        }
    }
    return result;
};