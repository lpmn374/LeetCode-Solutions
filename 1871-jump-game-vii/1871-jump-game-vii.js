/**
 * @param {string} s
 * @param {number} minJump
 * @param {number} maxJump
 * @return {boolean}
 */
var canReach = function(s, minJump, maxJump) {
    const n = s.length;
    if (s[n - 1] === '1') return false;
    const dp = new Array(n).fill(false);
    dp[0] = true; 
    let reachableIndexCount = 0;
    for (let j = 1; j < n; j++) {
        if (j >= minJump && dp[j - minJump] === true) 
            reachableIndexCount++;
        if (j > maxJump && dp[j - maxJump - 1] === true) 
            reachableIndexCount--;
        if (s[j] === '0' && reachableIndexCount > 0)
            dp[j] = true;
    }
    return dp[n - 1];
};