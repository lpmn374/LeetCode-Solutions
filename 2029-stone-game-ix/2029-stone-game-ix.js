/**
 * @param {number[]} stones
 * @return {boolean}
 */
var stoneGameIX = function(stones) {
    let n=stones.length, cnt=new Array(3).fill(0);
    for(let i=0;i<n;i++)
        cnt[stones[i]%3]++;
    if(cnt[0]%2===0) return cnt[1]>0 && cnt[2]>0;
    return Math.abs(cnt[1]-cnt[2])>2;
};
