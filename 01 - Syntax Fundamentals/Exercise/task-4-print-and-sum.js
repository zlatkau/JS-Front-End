function solve(stratNum, endNum) {
    let allNums = '';
    let sumNums = 0;

    for (let i=stratNum; i<=endNum; i++) {
        allNums += i;
        allNums += ' ';
        sumNums += i;
    }

    console.log(allNums);
    console.log(`Sum: ${sumNums}`);

}

solve(50, 60)