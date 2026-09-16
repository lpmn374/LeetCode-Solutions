/**
 * @param {number} n
 * @param {number[]} startPos
 * @param {string} s
 * @return {number[]}
 */
var executeInstructions = function(n, startPos, s) {
    let m=s.length, result=new Array(m).fill(0);
    for(let i=0;i<m;i++){
        let c=startPos[1], r=startPos[0];
        for(let j=i;j<m;j++){
            if(s[j]==='L') c--;
            else if(s[j]==='R') c++;
            else if(s[j]==='D') r++;
            else if(s[j]==='U') r--;
            if (c<0 || r<0 || c>=n || r>=n) break;
            result[i]++;
        }
    }
    return result;
};