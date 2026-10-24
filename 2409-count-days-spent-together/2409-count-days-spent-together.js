/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function(arriveAlice, leaveAlice, arriveBob, leaveBob) {
    let daysOfMonth=[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], daysOfYear=new Array(12).fill(0), day=0;
    for(let i=0;i<12;i++){
        daysOfYear[i]=day;
        day+=daysOfMonth[i];
    }
    function convertDate(dateString) {
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
    let aArrive=convertDate(arriveAlice), aLeave=convertDate(leaveAlice), bArrive=convertDate(arriveBob), bLeave=convertDate(leaveBob);
    let isAliceArriveFirst=aArrive<bArrive?true:false;
    if ((isAliceArriveFirst && aLeave<bArrive) || (!isAliceArriveFirst && bLeave<aArrive)) return 0;
    return Math.min(aLeave, bLeave)-Math.max(aArrive, bArrive)+1;
};