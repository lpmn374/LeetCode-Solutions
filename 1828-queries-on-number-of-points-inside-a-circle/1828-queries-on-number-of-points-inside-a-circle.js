/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function(points, queries) {
    let result=[];
    for (let [x,y,r] of queries){
        let sqrR=r**2, count=0;
        for(let [xp,yp] of points)
            if ((xp-x)**2+(yp-y)**2<=sqrR) count++;
        result.push(count);
    }
    return result;
};