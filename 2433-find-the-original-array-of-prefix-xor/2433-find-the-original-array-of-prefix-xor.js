/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function(pref) {
    let prev=0;
    for(let i=0;i<pref.length;i++){
        pref[i]^=prev;
        prev^=pref[i];
    }
    return pref;
};