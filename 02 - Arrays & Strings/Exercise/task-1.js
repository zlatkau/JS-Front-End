function solve(arr, n) {
    for (let i = 1; i <= n; i++) {
        element = arr.shift()
        arr.push(element)

       
    }

    console.log(arr.join(' '));
}

solve([32, 21, 61, 1], 4)