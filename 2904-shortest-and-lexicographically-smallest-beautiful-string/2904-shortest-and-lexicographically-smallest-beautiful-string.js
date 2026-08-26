/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var shortestBeautifulSubstring = function(s, k) {
    let ans = "";
    for (let i = 0; i < s.length; i++) {
        let count = 0, current = "";
        for (let j = i; j < s.length; j++) {
            current += s[j];
            if (s[j] === '1') count++;
            if (count === k) {
                if (ans === "" || current.length < ans.length || (current.length === ans.length && current < ans)) ans = current;
                break; 
            }
        }
    }
    return ans;
};
