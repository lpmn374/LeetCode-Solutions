/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    let stack = [];
    for(let i=0;i<num.length;i++){
        while(num[i]<stack[stack.length-1] && stack.length>0 && k>0){
            stack.pop();
            k--;
        }
        stack.push(num[i]);
    }
    while (k>0){
        stack.pop();
        k--;
    }
    stack=stack.join('').replace(/^0+/,'');
    return stack.length>0?stack:"0";
};