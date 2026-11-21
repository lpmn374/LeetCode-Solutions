/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let n=arr.length, prefix=new Array(n+1).fill(0);
    for(let i=1;i<=n;i++) prefix[i]=prefix[i-1]+arr[i-1];
    let j, sum=0;
    for(let i=0;i<n;i++){
        j=i;
        while(j<n){
            sum+=prefix[j+1]-prefix[i];
            j+=2;
        }
    }
    return sum;
};