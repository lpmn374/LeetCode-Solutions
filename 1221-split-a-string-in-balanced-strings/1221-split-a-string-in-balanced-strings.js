/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let countSub=0, stack=[s[0]];
    for(let i=1;i<s.length;i++){
        if (stack.length!==0 && s[i]!==stack[stack.length-1]) stack.pop();
        else stack.push(s[i]);
        if(stack.length===0) countSub++;
    }
    return countSub;
};