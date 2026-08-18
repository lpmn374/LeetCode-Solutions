/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestInteger = function(nums, k) {
    let n=nums.length, myMap=new Map();
    for(let i=0;i<n;i++){
        if(!myMap.has(nums[i])) myMap.set(nums[i],[]);
        myMap.get(nums[i]).push(i);
    }
    let arr=[], max=-1;
    for(let [key,val] of myMap){
        let count = val.length; 
        if (k === 1 && count === 1) arr.push(key);
        else if (k === n) arr.push(key);
        else if (count === 1 && (val[0] === 0 || val[0] === n - 1)) arr.push(key);
    }
    for(let i=0;i<arr.length;i++)
        if(arr[i]>max) max=arr[i];
    return arr.length>0?max:-1;
}