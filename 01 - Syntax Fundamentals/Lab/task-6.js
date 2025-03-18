function solve(num1, num2, num3) {
    let max_num;

    if (num1 > num2 && num1 > num3) {
        max_num = num1;
    } else if (num2 > num1 && num2 > num3) {
        max_num = num2;
    } else {
        max_num = num3
    }

    console.log(`The largest number is ${max_num}.`);

}

solve(-3, -5, -22.5)
