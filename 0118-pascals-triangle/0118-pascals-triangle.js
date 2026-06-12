/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result=[];
    for(let i=0;i<numRows;i++){
        let current=[];
        if (i===0) current.push(1);
        else{
            current.push(1);
            for(let j=1;j<result[i-1].length;j++)
                current.push(result[i-1][j-1]+result[i-1][j]);
            current.push(1);
        }
        result.push(current);
    }
    return result;
};