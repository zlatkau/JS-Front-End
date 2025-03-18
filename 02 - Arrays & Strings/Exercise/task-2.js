function solve(arr, n) {   
    let result = arr.filter((e, i) => i % n === n - 1*n)

    console.log(result);
}

function solve2(arr, n) {
    let result = []
    for (let index = 0; index < arr.length; index++) {
        if (index % n === 0) {
            result.push(arr[index])
        }
    }

    return result;
}



solve2(['5', 
'20', 
'31', 
'4', 
'20'], 
2
)