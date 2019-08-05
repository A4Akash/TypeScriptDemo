/**
 * Get fibonacci series till the given endNumber
 */
var getFibonacci = function (endNumber) {
    var i = 0;
    var j = 1;
    var sum = i + j;
    var output = [];
    if (endNumber >= i) {
        output.push(i);
    }
    if (endNumber >= j) {
        output.push(j);
    }
    while (sum < endNumber) {
        output.push(sum);
        i = j;
        j = sum;
        sum = i + j;
    }
    return output;
};
console.log(getFibonacci(0));
