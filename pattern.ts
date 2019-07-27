const pattern = () => {
    let i: number = 1;

    for (i; i <= 5; i++) {
        let s: string = '';
        let j: number = 1;
        for (j; j <= i; j++) {
            s = s + '' + j;
        }
        // console.log(s);
    }

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
