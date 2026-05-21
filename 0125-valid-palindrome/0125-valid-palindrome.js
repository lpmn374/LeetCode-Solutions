/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let arr=[];
    for(let i=0;i<s.length;i++)
        if ((s[i].charCodeAt(0)>='a'.charCodeAt(0) && s[i].charCodeAt(0)<='z'.charCodeAt(0)) || (s[i].charCodeAt(0)>='0'.charCodeAt(0) && s[i].charCodeAt(0)<='9'.charCodeAt(0)) ) arr.push(s[i]);
        else if (s[i].charCodeAt(0)>='A'.charCodeAt(0) && s[i].charCodeAt(0)<='Z'.charCodeAt(0)) arr.push(s[i].toLowerCase());
        let left=0, right=arr.length-1;
        while(left<right){
            if(arr[left]!==arr[right]) return false;
            left++;
            right--;
        }
        return true;
};