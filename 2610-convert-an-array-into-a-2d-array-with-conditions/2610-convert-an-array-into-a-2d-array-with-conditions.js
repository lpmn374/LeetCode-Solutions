/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    let result=[], myMap=new Map();
    for(let i=0;i<nums.length;i++)
        myMap.set(nums[i], (myMap.get(nums[i]) + 1) || 1);
    while(myMap.size > 0){
        let current=[];
        for(let [key, value] of myMap){
            if (value>0){   
                current.push(key);
                value--;
            }
            if (value===0)  myMap.delete(key);
            else myMap.set(key, value);
        }
        result.push(current);
    }
    return result;
};