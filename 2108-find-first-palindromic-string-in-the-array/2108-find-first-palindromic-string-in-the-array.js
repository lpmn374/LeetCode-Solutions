/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    let isPalin=false;
    for(let i=0;i<words.length;i++){
        let l=0, r=words[i].length-1;
        while(l<=r){
            if(words[i][l]!==words[i][r]) break;
            l++;
            r--;
            if(l>=r) isPalin=true;
        }
        if (isPalin) return words[i];
    }
    return "";
};