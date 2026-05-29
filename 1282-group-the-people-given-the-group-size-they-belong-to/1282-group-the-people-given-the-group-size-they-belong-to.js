/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    let result=[], current={};
    for(let i=0;i<groupSizes.length;i++){
        if(!current[groupSizes[i]]) current[groupSizes[i]]=[];
        current[groupSizes[i]].push(i);
        if (current[groupSizes[i]].length===groupSizes[i]){
            result.push(current[groupSizes[i]]);
            current[groupSizes[i]]=[];
        }
    }
    return result;
};