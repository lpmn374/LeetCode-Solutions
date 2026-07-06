/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
    let n=intervals.length, count=n;
    for(let i=0;i<n;i++)
        for(let j=0;j<n;j++)
            if(i!==j && intervals[i][0]>=intervals[j][0] && intervals[i][1]<=intervals[j][1]){
                count--;
                break;
            }
    return count;
};