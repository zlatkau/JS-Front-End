function solve(n){
    let deviders = []

    for (let index = 1; index < n; index++) {
        if (n % index == 0) {
            deviders.push(index)
        } 
    }

    function isNumberPerfect(n) {
        return n === deviders.reduce((sum, n) => sum += n, 0)
    }

    function checkIsNumberPerfect(n) {
        if (isNumberPerfect(n)) {
            console.log('We have a perfect number!');
        } else {
            console.log("It's not so perfect.")
        }
    }

    checkIsNumberPerfect(n)
}

solve(1236498)