/**
 * @param {number[]} nums
 * @return {number}
 */
var maxLength = function(nums) {
    let gcd=(a,b)=>(b?gcd(b,a%b):a), l=0, product=1, max=2;
    for(let [r,x] of nums.entries()){
        while(gcd(product,x)>1) product/=nums[l++];
        product*=x;
        max=Math.max(max, r-l+1);
    }
    return max;
};