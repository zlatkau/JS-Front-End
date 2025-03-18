function solve(num) {
    let value=num;
    let numString = ''
    let numSum = 0;
    let isSameSigits = true

    while (value) {
        currentNum = value % 10
        numSum += currentNum;
        numString += currentNum        
        value = Math.floor(value / 10)
    }

    let currentLetter = numString[0];

    for (let i=1; i < numString.length; i++) {
        if (currentLetter === numString[i]) {
            currentLetter = numString[i];
            isSameSigits = true;
        } else {
            isSameSigits = false;
            break;
        }
    }

    console.log(isSameSigits);
    console.log(numSum);
}

solve(1234)