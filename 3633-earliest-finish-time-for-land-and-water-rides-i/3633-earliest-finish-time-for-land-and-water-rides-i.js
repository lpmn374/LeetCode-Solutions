/**
 * @param {number[]} landStartTime
 * @param {number[]} landDuration
 * @param {number[]} waterStartTime
 * @param {number[]} waterDuration
 * @return {number}
 */
var earliestFinishTime = function(landStartTime, landDuration, waterStartTime, waterDuration) {
    let currentMin=landStartTime[0]+landDuration[0]+waterStartTime[0]+waterDuration[0];
    for(let i=0;i<landStartTime.length;i++){
        let current1, current2;
        for(let j=0;j<waterStartTime.length;j++){
            if (landStartTime[i]+landDuration[i]>=waterStartTime[j]) 
                current1=landStartTime[i]+landDuration[i]+waterDuration[j];
            else current1=waterStartTime[j]+waterDuration[j];
            if (waterStartTime[j]+waterDuration[j]>=landStartTime[i]) 
                current2=waterStartTime[j]+waterDuration[j]+landDuration[i];
            else current2=landStartTime[i]+landDuration[i];
            currentMin=Math.min(currentMin, current1, current2);
        }
    }
    return currentMin;
};