/**
 * @param {string} startTime
 * @param {string} endTime
 * @return {number}
 */
var secondsBetweenTimes = function(startTime, endTime) {
    let n=startTime.length, start=0, end=0, seconds=60*60, currentStart="", currentEnd="";
    for(let i=0;i<=n;i++){
        if(i===n || startTime[i]===':'){
            start+=Number(currentStart)*seconds;
            end+=Number(currentEnd)*seconds;
            currentStart="";
            currentEnd="";
            seconds/=60;
        }
        else{
            currentStart+=startTime[i];
            currentEnd+=endTime[i];
        }
    }
    return end-start;
};