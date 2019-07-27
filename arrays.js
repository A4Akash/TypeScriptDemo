var arr1 = [{ a: 'a' }, { b: 'b' }];
var arr2 = arr1.slice();
arr1[0] = { c: 'c' };
console.log(arr1);
console.log(arr2);
