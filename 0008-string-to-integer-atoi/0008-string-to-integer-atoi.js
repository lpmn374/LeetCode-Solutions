/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let result=0, negative=false, hasNumber=false, hasSign=false;
    for(let i=0;i<s.length;i++){
        if(s[i]===' ' && !hasNumber && !hasSign) continue;
        if(s[i]>='0' && s[i]<='9'){ 
            result=result*10 + Number(s[i]);
            if(!hasNumber) hasNumber=true;
            continue;
        }
        if (s[i]==='-' && !hasNumber && !hasSign){
            negative=true;
            hasSign=true;
        }
        else if (s[i]==='+' && !hasNumber && !hasSign){
            negative=false;
            hasSign=true;
        }
        else break;
    }
    result = (negative?result*-1:result);
    if (result < Math.pow(-2,31)) return Math.pow(-2,31);
    if (result > Math.pow(2,31) -1) return Math.pow(2,31)-1;
    return result;
};