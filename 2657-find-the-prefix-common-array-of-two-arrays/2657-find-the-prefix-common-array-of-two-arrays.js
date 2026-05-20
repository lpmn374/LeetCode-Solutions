/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
    let result = [];
    let seen = new Array(A.length + 1).fill(0);
    let commonCount = 0;
    for (let i = 0; i < A.length; i++) {
        seen[A[i]]++;
        if (seen[A[i]] === 2) {
            commonCount++;
        }
        seen[B[i]]++;
        if (seen[B[i]] === 2) {
            commonCount++;
        }
        result.push(commonCount);
    }
    return result;
};
