const reverseString = function(string) {
    var length = string.length;
    var reverse = "";
    for (let i = length; i > -1; i--) {
        reverse = reverse + string.charAt(i);
    }
    return reverse;
};

console.log(reverseString("hello"));
// Do not edit below this line
module.exports = reverseString;
