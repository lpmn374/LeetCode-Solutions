/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let row=Array.from({length:9}, ()=> new Array(9).fill(0)), col=Array.from({length:9}, ()=> new Array(9).fill(0)), cellCount=Array.from({length:9}, ()=> new Array(9).fill(0)), cellTable={
        0:0,
        1:1,
        2:2,
        10:3,
        11:4,
        12:5,
        20:6,
        21:7,
        22:8
    }
    for(let i=0;i<9;i++)
        for(let j=0;j<9;j++)
            if(board[i][j]!=='.'){
                if(i>=0&&i<3) cell=0;
                else if (i<6) cell=1;
                else cell=2;
                if(j>=0&&j<3) cell=cell*10;
                else if (j<6) cell=cell*10+1;
                else cell=cell*10+2;
                let num=Number(board[i][j])-1;
                row[num][i]++;
                if(row[num][i]>1) return false;
                col[num][j]++;
                if(col[num][j]>1) return false;
                cellCount[num][cellTable[cell]]++;
                if(cellCount[num][cellTable[cell]]>1) return false;
            }
    return true;
};