/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k1
 * @param {number} k2
 * @return {number}
 */
var minSumSquareDiff = function(nums1, nums2, k1, k2) {
    let len=nums1.length, totalDiff=0, maxVal=0, freq=new Array(100005).fill(0);
    for (let i=0;i<len;i++){
        let val=Math.abs(nums1[i]-nums2[i]);
        if (val>0){
            freq[val]++;
            totalDiff+=val;
            maxVal=Math.max(maxVal, val);
        }
    }
    let k=k1+k2;
    if (k >= totalDiff) return 0;
    for (let i=maxVal;i>0 && k>0;i--) {
        if (freq[i]===0) continue;
        let reduceCount=Math.min(k, freq[i]);
        freq[i]-=reduceCount;
        freq[i-1]+=reduceCount;
        k-=reduceCount;
    }
    let sum = 0;
    for (let i=1;i<=maxVal;i++)
        if (freq[i]>0) sum+=freq[i]*(i*i);
    return sum;
};

