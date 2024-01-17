const repeatString = function(string, number) {
    var result = "";
    if (number < 0) {
        return "ERROR"
    }
    else {
        for (let i = 1; i <= number; i++) {
            result = result + string
        }
        return result;
    }
};

repeatString("hey", 3);

// Do not edit below this line
module.exports = repeatString;
