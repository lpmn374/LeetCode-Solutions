/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    let time=0;
    for(let i=0;i<tickets.length;i++)
        if (i<=k) time+= Math.min(tickets[i], tickets[k]);
        else if(tickets[i]<tickets[k]) time+=tickets[i];
        else time+=tickets[k]-1;
    return time;
};