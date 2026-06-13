/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let isEven=false, maxLength=0, maxLeft=0, maxRight=0;
    if(s.length%2 ===0) isEven=true;
    for(let i=0;i<s.length;i++){
        let rightChoices=[i, i+1];
        for (let x of rightChoices){
            let left=i, right=x;
            while(left>=0 && right<s.length && s[left]===s[right]){
                left--;
                right++;
            }
            let currentLength=right-left+1;
            if (maxLength<currentLength){
                maxLength=currentLength;
                maxLeft=++left;
                maxRight=--right;
            }
        }
    }
    return s.substring(maxLeft, maxRight+1);
};