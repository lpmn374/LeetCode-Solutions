/**
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function(arr) {
    let oddCount = 0, evenCount = 1, currentSum = 0, result = 0;
    const MOD = 1e9 + 7;
    for (let num of arr) {
        currentSum += num;
        if (currentSum % 2 !== 0) {
            result = (result + evenCount) % MOD;
            oddCount++;
        }
        else{
            result = (result + oddCount) % MOD;
            evenCount++;
        }
    }
    return result;
};