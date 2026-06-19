/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let current=0, highest=current;
    for(let i=0;i<gain.length;i++){
        current+=gain[i];
        if(current>highest) highest=current;
    }
    return highest;
};