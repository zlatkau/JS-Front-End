function solve(n) {
    let printRow = function(n) {
        let matrixRow = []
        for (i=0; i< n; i++){
            matrixRow.push(n)
        }

        return matrixRow.join(' ')
    }

    let printMatrix = function(n) {

        for (j=0; j< n; j++){
            console.log(printRow(n))
        }
    }

    printMatrix(n)
}

solve(7)