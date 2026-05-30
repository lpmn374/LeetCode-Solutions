/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    let temp=[], widestArea=0;
    for(let [x,y] of points)
        temp.push(x);
    temp.sort((a,b)=>a-b);
    for(let i=0;i<temp.length;i++)
        if (temp[i+1]-temp[i]>widestArea) widestArea=temp[i+1]-temp[i];
    return widestArea;
};