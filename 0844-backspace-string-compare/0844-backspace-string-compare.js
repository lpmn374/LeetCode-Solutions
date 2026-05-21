/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let pointerS=s.length-1, pointerT=t.length-1, backSpaceS=0, backSpaceT=0;
    while(pointerS>=0 || pointerT>=0){
        while (pointerS>=0){
            if(s[pointerS]==='#'){
                backSpaceS++;
                pointerS--;
            }
            else if (backSpaceS>0){
                backSpaceS--;
                pointerS--;
            }
            else break;
        }
        while (pointerT>=0){
            if(t[pointerT]==='#'){
                backSpaceT++;
                pointerT--;
            }
            else if (backSpaceT>0){
                backSpaceT--;
                pointerT--;
            }
            else break;
        }
        if (pointerS>=0 !== pointerT>=0) return false;
        if (pointerS>=0 && pointerT>=0 && s[pointerS]!==t[pointerT]) 
            return false;
        pointerS--;
        pointerT--;
        }
    return true;
};