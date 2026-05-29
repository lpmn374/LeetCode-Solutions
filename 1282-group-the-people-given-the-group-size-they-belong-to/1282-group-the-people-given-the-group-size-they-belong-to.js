/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    let result=[], myMap=new Map();
    for(let i=0;i<groupSizes.length;i++){
        if(!myMap.has(groupSizes[i])) myMap.set(groupSizes[i], [] );
        myMap.get(groupSizes[i]).push(i);
        if (myMap.get(groupSizes[i]).length===groupSizes[i]){
            result.push(myMap.get(groupSizes[i]));
            myMap.delete(groupSizes[i]);
        }
    }
    return result;
};