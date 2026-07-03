/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let sLen=s.length, pLen=p.length,table=Array.from({length:sLen+1}, () => new Array(pLen+1).fill(false));
    table[0][0]=true;
    for(let i=1;i<pLen+1;i++)
        if(p[i-1]==='*') table[0][i]=table[0][i-2];
    for(let i=1;i<sLen+1;i++)
        for(let j=1;j<pLen+1;j++)
            if(p[j-1]==='.'||p[j-1]===s[i-1]) table[i][j]=table[i-1][j-1];
            else if (p[j-1]==='*'){
                table[i][j]=table[i][j-2];
                if(p[j-2]==='.' ||p[j-2]===s[i-1]) table[i][j]=table[i][j] | table[i-1][j];
            }
            else table[i][j] = false;
    return table[sLen][pLen];
};