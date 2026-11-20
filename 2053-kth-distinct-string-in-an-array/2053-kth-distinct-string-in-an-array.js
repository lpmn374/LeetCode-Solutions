/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    let n=arr.length, distinct=new Set(), duplicate=new Set();
    for(let i=0;i<n;i++)
        if(duplicate.has(arr[i])) continue;
        else if(distinct.has(arr[i])){
            duplicate.add(arr[i]);
            distinct.delete(arr[i]);
        }
        else distinct.add(arr[i]);
    for(let item of distinct){
        k--;
        if(k===0) return item;
    }
    return "";
};