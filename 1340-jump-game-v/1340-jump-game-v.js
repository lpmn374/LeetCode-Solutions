/**
 * @param {number[]} arr
 * @param {number} d
 * @return {number}
 */
var maxJumps = function(arr, d){
    const n=arr.length;
    const memo=new Array(n).fill(0);
    let maxResult=0;
    function dfs(i){
        if (memo[i]!==0) return memo[i];
        let maxSteps=1; 
        for (let j=i+1;j<=i+d && j<n;j++){
            if (arr[j]>=arr[i]) break; 
            maxSteps=Math.max(maxSteps, 1+dfs(j));
        }
        for (let j=i-1;j>=i-d && j>=0;j--){
            if (arr[j]>=arr[i]) break;
            maxSteps=Math.max(maxSteps, 1+dfs(j));
        }
        memo[i]=maxSteps;
        return maxSteps;
    }
    for (let i=0; i<n; i++) 
        maxResult=Math.max(maxResult, dfs(i));
    return maxResult;
};