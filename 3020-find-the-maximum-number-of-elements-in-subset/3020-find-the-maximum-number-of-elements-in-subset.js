/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumLength = function(nums) {
    let n=nums.length, maxCount=1, myMap=new Map();
    for(let i=0;i<n;i++)
        myMap.set(nums[i], myMap.get(nums[i])+1 || 1);
    if(myMap.has(1)){
        let countOne=myMap.get(1);
        maxCount=countOne%2!==0?countOne:countOne-1;
    }
    for(let i=0;i<n;i++){
        if (nums[i]===1) continue;
        let count=1, nextNum=nums[i]**2, currentNum=nums[i];
        while (myMap.has(nextNum) && myMap.get(currentNum)>1){
            count+=2;
            currentNum=nextNum;
            nextNum=currentNum**2;
        }
        if (maxCount<count) maxCount=count;
    }
    return maxCount;
};