/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function(arriveAlice, leaveAlice, arriveBob, leaveBob) {
    const daysOfMonth=[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], daysOfYear=new Array(12).fill(0);
    daysOfYear[0]=0;
    for(let i=1;i<12;i++)
        daysOfYear[i]=daysOfYear[i-1]+daysOfMonth[i-1];
    let aArrive=convertDate(arriveAlice, daysOfYear), aLeave=convertDate(leaveAlice, daysOfYear), bArrive=convertDate(arriveBob, daysOfYear), bLeave=convertDate(leaveBob, daysOfYear);
    return Math.max((Math.min(aLeave, bLeave)-Math.max(aArrive, bArrive)+1), 0);
};
function convertDate(dateString, daysOfYear) {
    let num=0, days=0;
    for(let i=0;i<dateString.length;i++){
        if(dateString[i]==='-'){
            days+=daysOfYear[num-1];
            num=0;
            continue;
        }
        num=num*10+Number(dateString[i]);
    }
    days+=num;
    return days;
}