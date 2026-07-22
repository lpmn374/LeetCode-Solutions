/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let row=Array.from({length:9}, ()=> new Array(9).fill(0)), col=Array.from({length:9}, ()=> new Array(9).fill(0)), cellCount=Array.from({length:9}, ()=> new Array(9).fill(0));
    for(let i=0;i<9;i++)
        for(let j=0;j<9;j++)
            if(board[i][j]!=='.'){
                let cell = Math.floor(i / 3) * 3 + Math.floor(j / 3), num=Number(board[i][j])-1;
                row[num][i]++;
                if(row[num][i]>1) return false;
                col[num][j]++;
                if(col[num][j]>1) return false;
                cellCount[num][cell]++;
                if(cellCount[num][cell]>1) return false;
            }
    return true;
};