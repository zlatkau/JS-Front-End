function solve(n){
    let percentageFill = `${n}%`
    let extracPpercentageBar = n => `[${'%'.repeat(n/10)}${'.'.repeat(10-n/10)}]`

    function printProgress(n) {
        console.log(`${percentageFill} ${extracPpercentageBar(n)}`);
        if (n === 100) {
            console.log('Complete!')
        } else {
            console.log('Still loading...')
        }
    }

    printProgress(n)

}

solve(30)
solve(100)