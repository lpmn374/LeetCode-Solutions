/**
 * @param {number[][]} tasks
 * @return {number}
 */
var earliestTime = function(tasks) {
    let min=tasks[0][0]+tasks[0][1], n=tasks.length;
    for(let i=1;i<n;i++)
        if(tasks[i][0]+tasks[i][1]<min) min=tasks[i][0]+tasks[i][1];
    return min;
};