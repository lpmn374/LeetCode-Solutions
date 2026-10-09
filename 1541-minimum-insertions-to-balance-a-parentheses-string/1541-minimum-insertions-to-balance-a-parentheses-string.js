/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
    let balance=0, count=0;
    for(let i=0;i<s.length;i++){
        if(s[i]==='('){
            if (balance%2===1){
                count++;
                balance--;
            }
            else if (balance===-1){
                count+=2;
                balance=0;
            }
            balance+=2;
        }
        else balance--;
        if(balance===-2){
            count++;
            balance=0;
        }
    }
    if (balance===-1){
        count+=2;
        balance=0;
    }
    return balance+count;
};