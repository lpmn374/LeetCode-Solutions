/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let arr=new Array(26).fill(0), count=words.length;
    for(let i=0;i<allowed.length;i++)
        arr[allowed.charCodeAt(i) - 'a'.charCodeAt(0)] = 1;
    for(let i=0;i<words.length;i++)
        for(let j=0;j<words[i].length;j++)
            if(arr[words[i].charCodeAt(j) - 'a'.charCodeAt(0)]===0){
                count--;
                break;
            }
    return count;
};