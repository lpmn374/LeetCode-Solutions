/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let balance=0, result="";
    for(let c of s){
        if (c==="("){
            if (balance>0) result+=c;
            balance++;
        }
        else{
            balance--;
            if (balance>0) result+=c;
        }
    }
    return result;
};