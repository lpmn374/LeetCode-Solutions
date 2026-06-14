/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    let time=0, i=0;
    while(true){
        if (tickets[i]>0){
            tickets[i]--;
            time++;
        }
        if (i===k && tickets[i]===0) return time;
        i++;
        if(i===tickets.length) i=0; 
    }
};