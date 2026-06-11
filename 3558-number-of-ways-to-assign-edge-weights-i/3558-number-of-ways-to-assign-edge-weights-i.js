/**
 * @param {number[][]} edges
 * @return {number}
 */
var assignEdgeWeights = function(edges) {
    const adjacencyList = new Map();
    for (let [u, v] of edges) {
        if (!adjacencyList.has(u)) adjacencyList.set(u, []);
        if (!adjacencyList.has(v)) adjacencyList.set(v, []);
        adjacencyList.get(u).push(v);
        adjacencyList.get(v).push(u);
    }
    let currentNode = 1, currentPath = [1], maxLength = 1, visited = new Set([1]);;
    while (currentPath.length > 0) {
        if (adjacencyList.has(currentNode) && adjacencyList.get(currentNode).length > 0) {
            let nextNode = adjacencyList.get(currentNode).pop(); 
            if (!visited.has(nextNode)) {
                visited.add(nextNode);
                currentPath.push(nextNode);
                currentNode = nextNode; 
                if (maxLength < currentPath.length) maxLength = currentPath.length;
            }
        } 
        else {
            visited.delete(currentNode);
            currentPath.pop(); 
            currentNode = currentPath[currentPath.length - 1]; 
        }
    }
    return Number(2n ** BigInt(maxLength-2) % 1000000007n);
};