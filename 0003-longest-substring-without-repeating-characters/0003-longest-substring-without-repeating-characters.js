/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const mySet= new Set();
    let maxLength=0, left=0;
    for(let right=0;right<s.length;right++){
        while(mySet.has(s[right])){
            mySet.delete(s[left]);
            left++;
        }
        mySet.add(s[right]);
        if (maxLength<right-left+1) maxLength=right-left+1;
    }
    return maxLength;
};