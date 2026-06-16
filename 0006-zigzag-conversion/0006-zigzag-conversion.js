/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1 || s.length <= numRows) return s;
    let arr= Array.from({length:numRows}, ()=>[]), line=0, direction=1;
    for(let i=0;i<s.length;i++){
        arr[line].push(s[i]);
        if (line===numRows-1) direction=-1;
        else if (line===0) direction=1;
        line+=direction;
    }
    return arr.map(arr => arr.join('')).join('');
};