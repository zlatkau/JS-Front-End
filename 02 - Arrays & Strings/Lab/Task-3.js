function solve(numbers) {
    let evenSum = numbers
    .filter(num => num % 2 === 0)
    .reduce((sum, num) => sum + num, 0)

    let oddSum = numbers
    .filter(num => num % 2 !== 0)
    .reduce((sum, num) => sum + num, 0)

    let result = evenSum - oddSum
    console.log(result);
}

solve([1,2,3,4,5,6])