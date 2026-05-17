/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
    if (start<0 || start>arr.length-1 || arr[start] === -1) return false;
    if(arr[start]===0) return true;
    let jumpStep = arr[start];
    arr[start]=-1;
    return (canReach(arr,start-jumpStep) || canReach(arr,start+jumpStep));
};
