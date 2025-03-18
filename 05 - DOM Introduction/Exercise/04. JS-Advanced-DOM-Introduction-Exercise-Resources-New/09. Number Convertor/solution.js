function solve() {
    const selectMenuToElement = document.getElementById('selectMenuTo');
    const numberElement = document.getElementById('input');
    const outputElement = document.getElementById('result');
    const convertorButtonElement = document.querySelector('button');

    const binaryOprion = document.createElement('option');
    binaryOprion.value = 'binary';
    binaryOprion.textContent = 'Binary';
    selectMenuToElement.appendChild(binaryOprion);


    const hexadecimalOption = document.createElement('option');
    hexadecimalOption.value = 'hexadecimal';
    hexadecimalOption.textContent = 'Hexadecimal';
    selectMenuToElement.appendChild(hexadecimalOption);

    function convertDecimalToBinaty(number) {
        return number.toString(2)
    }

    function convertDecimalToHexidecimal(number) {
        return number.toString(16).toUpperCase()
    }

    const convertor = {
        binary: convertDecimalToBinaty,
        hexadecimal: convertDecimalToHexidecimal,
    }

    convertorButtonElement.addEventListener('click', () => {
        num = Number(numberElement.value)
        outputElement.value = convertor[selectMenuToElement.value](num)
    })
}