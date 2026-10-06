/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let balance=0, debt=0;
    for(let i=0;i<s.length;i++){
        if(s[i]==='(') balance++;
        else balance--;
        if(balance<0){
            debt+=(balance*(-1));
            balance=0;
        }
    }
    return debt+balance;
};