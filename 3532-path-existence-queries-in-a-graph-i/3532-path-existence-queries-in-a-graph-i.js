/**
 * @param {number} n
 * @param {number[]} nums
 * @param {number} maxDiff
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var pathExistenceQueries = function(n, nums, maxDiff, queries) {
    let parent=new Array(n), rank=new Array(n).fill(0);
    for(let i=0;i<n;i++)
        parent[i]=i;
    function find(i){
        if(parent[i]===i) return i;
        return parent[i]=find(parent[i]);
    }
    function union(i,j){
        let paI=find(i), paJ=find(j);
        if(paI!==paJ){
            if(rank[paI]<rank[paJ])
                parent[paI]=paJ
            else if (rank[paI]>rank[paJ])
                parent[paJ]=paI;
            else{
                parent[paJ]=paI;
                rank[paI]++;
            }
        }
    }
    for(let i=0;i<n-1;i++)
        if(Math.abs(nums[i]-nums[i+1])<=maxDiff) union(i,i+1);
    for(let i=0;i<queries.length;i++)
        queries[i]=(find(queries[i][0])===find(queries[i][1]));
    return queries;
};
