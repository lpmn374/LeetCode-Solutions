/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let myMapR=new Map(), myMapC=new Map(), myMapCell=new Map();
    for(let i=0;i<9;i++)
        for(let j=0;j<9;j++)
            if(board[i][j]!=='.'){
                if(i>=0&&i<3) cell=0;
                else if (i<6) cell=1;
                else cell=2;
                if(j>=0&&j<3) cell=cell*10;
                else if (j<6) cell=cell*10+1;
                else cell=cell*10+2;
                if(!myMapR.has(board[i][j])) myMapR.set(board[i][j],[]);
                if(!myMapC.has(board[i][j])) myMapC.set(board[i][j],[]);
                if(!myMapCell.has(board[i][j])) myMapCell.set(board[i][j],[]);
                myMapR.get(board[i][j]).push(i);
                myMapC.get(board[i][j]).push(j);
                myMapCell.get(board[i][j]).push(cell);
            }
    for(let key=1;key<=9;key++){
        let i=String(key);
        if(myMapR.has(i)){
            let mySet=new Set(myMapR.get(i));
            if(mySet.size!==myMapR.get(i).length) return false;
        }
        if(myMapC.has(i)){
            let mySet=new Set(myMapC.get(i));
            if(mySet.size!==myMapC.get(i).length) return false;
        }
        if(myMapCell.has(i)){
            let mySet=new Set(myMapCell.get(i));
            if(mySet.size!==myMapCell.get(i).length) return false;
        }
    }
    return true;
};