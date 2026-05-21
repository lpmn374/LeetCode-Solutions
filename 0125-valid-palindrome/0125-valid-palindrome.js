/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let arr=[];
    for(let i=0;i<s.length;i++)
        if ((s[i]>='a' && s[i]<='z') || (s[i]>='0' && s[i]<='9') ) 
            arr.push(s[i]);
        else if (s[i]>='A' && s[i]<='Z') arr.push(s[i].toLowerCase());
    let left=0, right=arr.length-1;
    while(left<right)
        if(arr[left++]!==arr[right--]) return false;
    return true;
};