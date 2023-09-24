// Create a function that receives one parameter.
// Check if a given string has all symbols in upper case. 
//If the string is empty or doesn't have any letter in it - the function should return false.

function isUpCase(str) {
    if (!str) {
    return false;
    }
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (/[a-zA-Z]/.test(char)) {
            if (char !== char.isUpCase()) {
            return false;
            }
        }
    }
    return true;
    }
    console.log(char.isUpCase)  