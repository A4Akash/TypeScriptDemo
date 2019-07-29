/**
 * Print pattern in below format
 *
 *  1
 *  1 2
 *  1 2 3
 *  1 2 3 4
 *  1 2 3 4 5
 *
 */
var pattern = function () {
    var i = 1;
    console.log("First approach - using 2 loops");
    for (i; i <= 5; i++) {
        var s_1 = '';
        var j = 1;
        for (j; j <= i; j++) {
            s_1 = s_1 + ' ' + j;
        }
        console.log(s_1);
    }
    console.log('--------------------------');
    console.log("Second approach - using only 1 loop and a counter");
    var count = 1;
    var k = 1;
    var s = '';
    for (k; k <= count; k++) {
        s = s + " " + k;
        if (k === count) {
            count += 1;
            console.log(s);
            if (count === 6) {
                break;
            }
        }
    }
};
pattern();
