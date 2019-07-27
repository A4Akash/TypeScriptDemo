const arr1: Array<object> = [{a: 'a'}, {b: 'b'}]
const arr2 = arr1.slice();
arr1[0] = {c: 'c'};

console.log(arr1);
console.log(arr2);

