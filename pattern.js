var pattern = function () {
    var i = 1;
    for (i; i <= 5; i++) {
        var s_1 = '';
        var j = 1;
        for (j; j <= i; j++) {
            s_1 = s_1 + '' + j;
        }
        // console.log(s);
    }
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
