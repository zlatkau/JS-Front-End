function solve(numbers) {
    let resilt = []
    numbers.sort((a, b) => a - b);
    
    while (numbers.length > 0) {
        resilt.push(numbers.shift())
        resilt.push(numbers.pop())
    }

    return resilt;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])