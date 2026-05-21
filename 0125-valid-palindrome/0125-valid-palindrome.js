/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let left=0, right=s.length-1;
    const needTrack = c => (c>='a' && c<='z') || (c>='0' && c<='9') || (c>='A' && c<='Z');
    while(left<right){
        while(left<right && !needTrack(s[left])) left++;
        while(left<right && !needTrack(s[right])) right--;
        if(s[left].toLowerCase() !== s[right].toLowerCase()) return false;
        left++;
        right--;
    }
    return true;
};
