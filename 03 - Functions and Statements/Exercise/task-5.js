function solve(numbers) {
    function isPalindrome(number) {
        let reveresedNum = number.toString().split("").reverse().join("")

        return number.toString() === reveresedNum
    }

    function checkArrayForPalindrome(numbers) {
        for (const number of numbers) {
            console.log(isPalindrome(number));
        }
    }

    checkArrayForPalindrome(numbers)
}

solve([123,323,421,121])