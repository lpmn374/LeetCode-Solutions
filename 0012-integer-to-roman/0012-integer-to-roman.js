/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let result=[], table = {
        1: 'I',
        5: 'V',
        10: 'X',
        50: 'L',
        100: 'C',
        500: 'D',
        1000: 'M'
    }
    num=num.toString();
    for(let i=0;i<num.length;i++){
        placeValue=10**(num.length-1-i);
        currentNum=num[i]*placeValue; 
        if (num[i]==='5' || num[i]==='1')
            result.push(table[currentNum]);
        else if (num[i]==='4' || num[i]==='9'){
            result.push(table[placeValue]);
            result.push(table[currentNum+placeValue]);
        }
        else if (Number(num[i])<=3)
            for(let j=0;j<Number(num[i]);j++)
                result.push(table[placeValue]);
        else if (Number(num[i])>=6){
            result.push(table[currentNum-(num[i]-5)*placeValue]); 
            for(let j=6;j<=num[i];j++)
                result.push(table[placeValue]);
        }
    }
    return result.join('');
};