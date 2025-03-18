function solve(a, b, c){
    let sum = (a, b) => a + b
    let substract = (a, b) => a - b

    return substract(sum(a, b), c)

}

solve(23,
    6,
    10
    )