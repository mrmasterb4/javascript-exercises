const removeFromArray = function() {
    var array = arguments[0];
    var arraylength = array.length;
    var length = arguments.length - 1;
    for (let i = 1; i <= length; i++) {
        for (let p = 0; p <= arraylength; p++) {
            var index = array.indexOf(arguments[i]);
            if (index >= 0) {
                array.splice(index, 1);
            }
        }
    }
    return array;
};

removeFromArray([1,2,3], 1, 2, 3);
// Do not edit below this line
module.exports = removeFromArray;
