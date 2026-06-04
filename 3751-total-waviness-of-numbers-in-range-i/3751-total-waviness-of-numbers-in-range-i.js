/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var totalWaviness = function(num1, num2) {
    let count=0;
    for(let i=num1;i<=num2;i++){
        number=i.toString();
        if(number.length<3) continue;
        for(let j=1;j<number.length;j++){
            if ((number[j]>number[j-1] && number[j]>number[j+1]) || (number[j]<number[j-1] && number[j]<number[j+1]))
                 count++;

        }
    }
    return count;
};