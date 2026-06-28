/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function(points, queries) {
    let qLen=queries.length, pLen=points.length, result=new Array(qLen);
    for(let i=0;i<qLen;i++){
        let x=queries[i][0], y=queries[i][1], sqrR=(queries[i][2])**2, count=0;
        for(let j=0;j<pLen;j++)
            if((points[j][0]-x)**2+(points[j][1]-y)**2<=sqrR) count++;
        result[i]=count;
    }
    return result;
};