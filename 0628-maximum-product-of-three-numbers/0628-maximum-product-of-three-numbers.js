/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    if (nums.length===3) return nums[0]*nums[1]*nums[2];
    nums.sort((a,b)=> a-b);
    if (nums[0]<0 && nums[1]<0 && nums[nums.length-1]>0) 
        if(nums[0]*nums[1] > nums[nums.length-3]*nums[nums.length-2])
            return nums[0]*nums[1]*nums[nums.length-1];
    if (nums[nums.length-1]>0 && nums[nums.length-2]>0 && nums[nums.length-3]<0){
        end=nums.length-2;
        start=end-2;
    }
    else{
        end=nums.length-1;
        start=end-2;
    }
    let result=nums[start];
    for(let i=start+1;i<=end;i++)
        result*=nums[i];
    return result;
};

