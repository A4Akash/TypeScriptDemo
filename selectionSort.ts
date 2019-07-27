const arr:Array<number> = [51, 2, 45, 25, 12];

const sort = (arr: Array<number>) => {
    const n:number = arr.length;
    let i:number = 0;

    // One by one move boundary of unsorted subarray 
    for(i; i< n-1; i++) {
        // Find the minimum element in unsorted array 
        let min_index:number = i;
        let j:number = i+1;

        for(j; j<n; j++) {
            if(arr[j] < arr[min_index]) {
                min_index = j;
            }
        }

        // Swap the found minimum element with the first element 
        let temp:number = arr[min_index];
        arr[min_index] = arr[i];
        arr[i] = temp;
    }

    return arr;
}

console.log(arr);
console.log(sort(arr));
