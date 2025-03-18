function solve(num) {
    let value=num;
    let numSum = 0;

    while (value) {
        numSum += value % 10;
        value = Math.floor(value / 10)
    }

    console.log(numSum);
}

solve(543)