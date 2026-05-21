/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var longestCommonPrefix = function(arr1, arr2) {
    let prefixesArr= new Set(), maxLength = 0;
    for(let x of arr1)
        while (x>0){
            prefixesArr.add(x);
            x=Math.floor(x/10);
        }    
    for(let y of arr2)  
        while (y>0){
            if (prefixesArr.has(y)){
                let currentLength = y.toString().length;
                maxLength=Math.max(maxLength,currentLength);
            } 
            y=Math.floor(y/10);
        }  
    return maxLength;
};
