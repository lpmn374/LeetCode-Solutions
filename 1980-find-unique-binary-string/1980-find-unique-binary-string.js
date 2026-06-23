/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    let mySet=new Set(), number=0, result=[];
    for(let i=0;i<nums.length;i++){
        let current=0;
        for(let j=0;j<nums[i].length;j++)
            current+=nums[i][j]*(2**(nums[i].length-1-j));
        mySet.add(current);
    }
    while (mySet.has(number)) number++;
    for(let i=0;i<nums[0].length;i++)
        if(number>=2**(nums[0].length-1-i)){
            result.push(1);
            number-=2**(nums[0].length-1-i);
        }
        else result.push(0);
    return result.join('');
};