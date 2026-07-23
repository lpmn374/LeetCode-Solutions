/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function(n) {
    for(let i=2;i<=n-2;i++){
        let len=Math.floor(Math.log(n)/Math.log(i))+1, arr=new Array(len).fill(0), k, tmp=n;
        while(tmp>0){
            k=Math.floor(Math.log(tmp)/Math.log(i));
            arr[k]=1;
            tmp-=i**k;
            if (k===0) break;
        }
        if (tmp!==0) return false;
        let left=0, right=len-1;
        while(left<right){
            if(arr[left]!==arr[right]) return false;
            left++;
            right--;
        }
    }
    return true;
};




