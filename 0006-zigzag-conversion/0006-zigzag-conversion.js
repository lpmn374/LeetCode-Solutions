/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1 || s.length <= numRows) return s;
    let myMap=new Map(), result=[];
    for(let i=0;i<numRows;i++)
        myMap.set(i,[]);
    let hitBottom=false, line=0;
    for(let i=0;i<s.length;i++)
        if (!hitBottom){
            myMap.get(line).push(s[i]);
            line++;
            if (line === numRows-1) hitBottom=true;
        }
        else{
            myMap.get(line).push(s[i]);
            line--;
            if (line === 0) hitBottom=false;
        }
    for(let i=0;i<numRows;i++)
        result.push(myMap.get(i).join(''));
    return result.join('');
};