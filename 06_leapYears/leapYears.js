const leapYears = function(years) {
    var divisible100 = years % 100;
    var divisible400 = years % 400;
    var divisible4 = years % 4;
    console.log("Divisble100", divisible100);
    console.log("Divisble400", divisible400);
    console.log("Divisble4", divisible4);
    if (divisible4 == 0 && divisible100 >= 1 || divisible400 == 0) {
        return true;
    }
    else {
        return false;
    }
};

leapYears(1996);
// Do not edit below this line
module.exports = leapYears;
