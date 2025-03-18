function subtract() {
    let firstNumberElement = document.getElementById('firstNumber').value;
    let secondNumberElement = document.getElementById('secondNumber').value;

    let substraction = Number(firstNumberElement) - Number(secondNumberElement)
    console.log(substraction);

    document.getElementById('result').innerHTML = substraction;
}