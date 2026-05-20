/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    const stack=[];
    for(let x of s)
        if (stack.length!==0 && (x.charCodeAt(0) === stack[stack.length-1].charCodeAt(0)+ ('a'.charCodeAt(0)-'A'.charCodeAt(0)) || x.charCodeAt(0) === stack[stack.length-1].charCodeAt(0)+ ('A'.charCodeAt(0)-'a'.charCodeAt(0)))) stack.pop();
        else stack.push(x);
    return stack.join('');
};