/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length%2!==0) return false;
    const myMap=new Map ([['(',')'],['{','}'],['[',']'],[')',-1],['}',-1],[']',-1]]);
    let stack=[];
    for(let x of s)
        if (myMap.get(x)!==-1) stack.push(x);
        else if (stack.length===0 || x!==myMap.get(stack[stack.length-1])) return false;
        else stack.pop();
    if (stack.length===0) return true;
    return false;
};