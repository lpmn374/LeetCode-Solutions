/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let n=s.length, isOpen=false, rmIndex=[], balance=0, result="";
    for(let i=0;i<n;i++){
        if (!isOpen && s[i]==='('){ 
            isOpen=true;
            rmIndex.push(i);
        }
        else if(s[i]==="(") balance++;
        else balance--;
        if (balance<0){
            isOpen=false;
            rmIndex.push(i);
            balance=0;
        }
    }
    let current=0;
    for(let j=0;j<n;j++){
        if(j===rmIndex[current]){
            current++;
            continue;
        }
        result+=s[j];
    }
    return result;
};