/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
var processQueries = function(queries, m) {
    let arr=new Array(m+1), n=queries.length;
    for(let i=1;i<m+1;i++) arr[i]=i-1;
    for(let i=0;i<n;i++){
        let tmp=queries[i], location=arr[tmp];
        queries[i]=location;
        arr[tmp]=0;
        for(let j=1;j<m+1;j++)
            if (j!==tmp && arr[j]<location) arr[j]++;
    }
    return queries;
};