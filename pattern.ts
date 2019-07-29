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

const pattern = () => {
    let i: number = 1;

    console.log("First approach - using 2 loops");

    for (i; i <= 5; i++) {
        let s: string = '';
        let j: number = 1;
        for (j; j <= i; j++) {
            s = s + ' ' + j;
        }
        console.log(s);
    }

    console.log('--------------------------');

    console.log("Second approach - using only 1 loop and a counter");
    
    let count:number = 1;
    let k:number = 1;
    let s: string = '';
    for(k; k <= count; k++) {
        s = s + " " + k;
        if(k === count ) {
            count += 1;
            console.log(s);
            if(count === 6) {
                break;
            }
        }
    }    
}

pattern();
