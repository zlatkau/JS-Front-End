function solve(n1, n2) {
    function calculateFactoriel(n) {
        if (n<=0) {
            return 1
        }

        return n * calculateFactoriel(n-1)
    }

    function returnDividedFactoriels(a, b) {
        let result = calculateFactoriel(a) / calculateFactoriel(b)

        console.log(result.toFixed(2))
    }

    returnDividedFactoriels(n1, n2)
}


solve(5, 2)
