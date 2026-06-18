/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function(nums) {
    let mySet=new Set(nums), turn=mySet.size, count=0;
    for(let x of mySet){
        if (count===turn) break;
        let number=0;
        while(x>0){
            number=number*10+x%10;
            x=Math.floor(x/10);
        }
        if (number>0) mySet.add(number);
        count++;
    }
    return mySet.size;
};