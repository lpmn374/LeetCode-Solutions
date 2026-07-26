/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    let n=nums.length;
    if (n===3) return nums[0]*nums[1]*nums[2];
    nums.sort((a,b)=> a-b);
    if (nums[0]<0 && nums[1]<0 && nums[n-1]>0) 
        if(nums[0]*nums[1] > nums[n-3]*nums[n-2])
            return nums[0]*nums[1]*nums[n-1];
    if (nums[n-1]>0 && nums[n-2]>0 && nums[n-3]<0){
        end=n-2;
        start=end-2;
    }
    else{
        end=n-1;
        start=end-2;
    }
    let result=nums[start];
    for(let i=start+1;i<=end;i++)
        result*=nums[i];
    return result;
};

