/**
 * Get fibonacci series till the given endNumber
 */
const getFibonacci = (endNumber: number) => {
    let i: number = 0;
    let j: number = 1;
    let sum: number = i + j;
    const output: Array<number> = [];

    if (endNumber >= i) {
        output.push(i);
    }
    if(endNumber >= j) {
        output.push(j);
    }

    while(sum < endNumber)
    {
        output.push(sum);
        i = j;
        j = sum;
        sum = i + j;
    }

    return output;
}

console.log(getFibonacci(0));
