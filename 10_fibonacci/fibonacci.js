const fibonacci = function(position) {
    const sums = [0,1,1];
    var result = 0;
    position = parseInt(position);
    if (position >= 0) {
        for (let i = 1; i <= position + 3; i++) {
            result = sums[i] +  sums[i + 1];
            sums.push(result);
        }
        console.log(sums[position]);
        return sums[position];
    }
    else {
        return "OOPS";
    }
};
fibonacci(0);
// Do not edit below this line
module.exports = fibonacci;
