/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    let vowels=[], n=s.length, result="", index=0;
    for(let i=0;i<n;i++)
        if(s[i]==='a' || s[i]==='e' || s[i]==='i' || s[i]==='o' || s[i]==='u' || s[i]==='A' || s[i]==='E' || s[i]==='I' || s[i]==='O' || s[i]==='U') vowels.push(s[i]);
    vowels.sort((a,b)=>a.charCodeAt(0)-b.charCodeAt(0));
    for(let i=0;i<n;i++)
        if(s[i]==='a' || s[i]==='e' || s[i]==='i' || s[i]==='o' || s[i]==='u' || s[i]==='A' || s[i]==='E' || s[i]==='I' || s[i]==='O' || s[i]==='U') result+=vowels[index++];
        else result+=s[i];
    return result;
};