/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let maxBananas=1;
    for(let x of piles)
        if (x>maxBananas) maxBananas=x;
    let left=1, right=maxBananas, mid=1;
    while(left<=right){
        mid=left+Math.floor((right-left)/2);
        if (sumOfHours(mid, piles)<=h)
            right=mid-1;
        else
            left=mid+1;
    }
    return left;
};
function sumOfHours(mid, piles){
    let sum=0;
    for(let x of piles)
        sum+= Math.ceil(x/mid);
    return sum;
}