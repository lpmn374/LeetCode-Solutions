/**
 * @param {number} n
 * @param {number[]} requests
 * @return {number}
 */
var elevatorRequests = function(n, requests) {
    let sum=0, current=0;
    for(let i=0;i<requests.length;i++){
        sum+=Math.abs(current-requests[i]); 
        current=requests[i];
    }
    return sum;
};