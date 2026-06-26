/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let n=command.length, result="";
    for(let i=0;i<n;i++){
        if (command[i]===')') continue;
        if (command[i]==='(' && command[i+1]!==')') continue;
        if(command[i]==='(' && command[i+1]===')') result+='o';
        else result+=command[i];
    }
    return result;
};
