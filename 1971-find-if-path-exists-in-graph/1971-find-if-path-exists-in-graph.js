/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    const adjacencyList=new Map();
    for(let i=0;i<n;i++)
        adjacencyList.set(i,[]);
    for(let [u,v] of edges){
        adjacencyList.get(u).push(v);
        adjacencyList.get(v).push(u);
    }
    const visited=new Set();
    function dfs(currentNode){
        if(currentNode === destination)
            return true;
        if(visited.has(currentNode)) return false;
        visited.add(currentNode);
        const neighbors = adjacencyList.get(currentNode);
        for(let x of neighbors)
            if(dfs(x)===true)
                return true;
        return false;
    }
    return dfs(source);
};