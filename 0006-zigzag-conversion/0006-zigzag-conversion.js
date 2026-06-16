/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1 || s.length <= numRows) return s;
    let currentRow=0, aboveRows=0, belowRows=numRows-1, result= new Array(s.length), i=0;
    while(currentRow<numRows){
        index=currentRow;
        if(currentRow===0 || currentRow===numRows-1){
            step=Math.max(aboveRows,belowRows)*2;
            while(index<s.length){
                result[i]=s[index];
                index+=step;
                i++;
            }
        }
        else{
            count=0;
            while(index<s.length){
                result[i]=s[index];
                if(count%2===0) step=belowRows*2;
                else step=aboveRows*2;
                index+=step;
                i++;
                count++;
            }
        }
        currentRow++;
        aboveRows++;
        belowRows--;
    }
    return result.join('');
};