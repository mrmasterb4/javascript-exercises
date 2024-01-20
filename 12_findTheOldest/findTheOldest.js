const findTheOldest = function(array) {
    var currentTime = new Date()
    var oldestalive = [];
    var oldestdead = [];
    array.reduce((accumulator, currentValue) => {
        if (!getDeath(currentValue.yearOfDeath, currentValue.yearOfBirth)) {
            if (oldestalive.length == 0) {
                oldestalive = currentValue;
            }
            else if ((currentTime.getFullYear() - currentValue.yearOfBirth) > (currentTime.getFullYear() - oldestalive.yearOfBirth)) {
                oldestalive = currentValue;
            }
        }
        else {
            if (oldestdead.length == 0) {
                oldestdead = currentValue;
            }
            else if ((currentValue.yearOfDeath - currentValue.yearOfBirth) > (oldestdead.yearOfDeath - oldestdead.yearOfBirth)) {
                oldestdead = currentValue;
            }
        }
        accumulator = oldestdead;
        console.log("Current", accumulator);
    }, 0);
    if (oldestalive.length == 0) {
        return oldestdead;
    }
    else if ((currentTime.getFullYear() - oldestalive.yearOfBirth) < (oldestdead.yearOfDeath - oldestdead.yearOfBirth)) {
        return oldestdead;
    }
    else {
        return oldestalive;
    }
};

function getDeath(dead, alive) {
    if(!dead) {
        return false;
    }
    else {
        return true;
    }
}
// Do not edit below this line
module.exports = findTheOldest;
