/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let current=[], result=[], n=arr.length;
    for(let i=0;i<n;i++){
        current.push(arr[i]);
        if(current.length===size){
            result.push(current);
            current=[];
        }
    }
    if (current.length!==0) result.push(current);
    return result;
};
