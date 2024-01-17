const palindromes = function () {
    var string = arguments[0];
    var length = string.length;
    var string1 = "";
    var string2 = "";
    for (let i = length; i >= 0; i--) {
        var char = string.charAt(i);
        console.log();
        if ( char.toUpperCase() != char.toLowerCase() ) {
            string1 = string1 + char.toLowerCase();
        }
        else if (Number.isInteger(parseInt(char))) {
            string1 = string1 + char;
        }
        else {
            console.log("invalid char");
        }
    }
    for (let i = 0; i <= length; i++) {
        var char = string.charAt(i);
        if ( char.toUpperCase() != char.toLowerCase() ) {
            string2 = string2 + char.toLowerCase();
        }
        else if (Number.isInteger(parseInt(char))) {
            string2 = string2 + char;
        }
        else {
            console.log("invalid char");
        }
    }
    console.log(string1);
    console.log(string2);
    if (string1 === string2) {
        return true;
    }
    else {
        return false;
    }
};
palindromes("rac3e3car");
// Do not edit below this line
module.exports = palindromes;
