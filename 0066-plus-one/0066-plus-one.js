/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let needMoreDigit=false;
    for(let i=digits.length-1;i>=0;i--)
        if(digits[i]<9){
            digits[i]++;
            break;
        }
        else{
            digits[i]=0;
            if(i===0) needMoreDigit=true;
            else if(digits[i-1]<9){
                digits[i-1]++;
                break;
            }
        }
    return needMoreDigit?[1, ...digits]:digits;
};