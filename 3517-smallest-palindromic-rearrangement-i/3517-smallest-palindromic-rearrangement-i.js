/**
 * @param {string} s
 * @return {string}
 */
var smallestPalindrome = function(s) {
    if (s.length===1) return s;
    let arr=new Array(26).fill(0), a='a'.charCodeAt(0), n=s.length, result=new Array(n);
    for(let i=0;i<n;i++)
        arr[s.charCodeAt(i)-a]++;
    let index=0;
    for(let i=0;i<26;i++){
        if(!(index<n-index)) break;
        if(arr[i]%2!==0){
            result[Math.floor(n/2)]=String.fromCharCode(i+a);
            arr[i]--;
        }
        while (arr[i]>0){
            result[index]=String.fromCharCode(i+a);
            result[n-index]=result[index];
            index++;
            arr[i]-=2;
        }
    }
    return result.join("");
};
