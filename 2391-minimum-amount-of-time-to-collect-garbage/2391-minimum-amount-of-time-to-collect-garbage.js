/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function(garbage, travel) {
    let meetSet= new Set(), travelTime=travel.reduce((acc,cur)=>acc+cur,0), totalTime=0;
    for(let i=garbage.length-1;i>=0;i--){
        if(meetSet.size<3)
            for(let j=0;j<garbage[i].length;j++)
                if (!meetSet.has(garbage[i][j])){
                    meetSet.add(garbage[i][j]);
                    totalTime+=travelTime;
                }
        totalTime+=garbage[i].length;
        travelTime-=travel[i-1];
    }
    return totalTime;
};