/**
 * @param {string} s
 * @return {number}
 */
var minChanges = function(s) {
    let n=s.length, stack=[], count=0;
    for(let i=0;i<n;i++)
        if(stack.length===0) stack.push(s[i]);
        else if(s[i]===stack[stack.length-1]) stack.pop();
        else{
            count++;
            stack.pop();
        }
    return count;
};