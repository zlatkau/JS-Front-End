function solve(number) {
    let evenNums = number.toString().split('').filter(x => x % 2 == 0);
    let oddNums = number.toString().split('').filter(x => x % 2 != 0);

    oddNums = oddNums.map(x => Number(x))
    evenNums = evenNums.map(x => Number(x))

    let oddSum = oddNums.reduce((sum, num) => sum += num, 0);
    let evenSum = evenNums.reduce((sum, num) => sum += num, 0);
    
    function printResult(number) {
        console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
    }

    printResult(number)
}

solve(1000435)