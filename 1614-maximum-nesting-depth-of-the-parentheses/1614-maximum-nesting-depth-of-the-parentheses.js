/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let count=0, max=0;
    for(let i=0;i<s.length;i++){
        if(s[i]==='(') count++;
        else if (s[i]===')'){
            if (count>max) max=count;
            count--;
        }  
    }
    return max;
};