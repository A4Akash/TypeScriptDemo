var i = 1;
for (i; i <= 5; i++) {
    var s = '';
    var j = 1;
    for (j; j <= i; j++) {
        s = s + '' + j;
    }
    console.log(s);
}
var arr = [51, 2, 45, 25, 12];
var sort = function (arr) {
    var n = arr.length;
    var i = 0;
    for (i; i < n - 1; i++) {
        var min_index = i;
        var j = i + 1;
        for (j; j < n; j++) {
            if (arr[j] < arr[min_index]) {
                min_index = j;
            }
        }
        var temp = arr[min_index];
        arr[min_index] = arr[i];
        arr[i] = temp;
    }
    return arr;
};
console.log(arr);
console.log(sort(arr));
