const sumAll = function(number1, number2) {
    var sum = 0;
    if (Number.isInteger(number1) && Number.isInteger(number2) && number1 >= 0 && number2 >= 0) {
        if (number1 > number2) {
            for (let i = number2; i <= number1; i++) {
                sum = sum + i;
            }
        }
        else {
            for (let i = number1; i <= number2; i++) {
                sum = sum + i;
            }
        }
        return sum;
    }
    else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
