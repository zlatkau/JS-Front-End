function deleteByEmail() {
    const trElements = document.querySelectorAll('table tbody tr');
    let textElement = document.querySelector('input[name=email]').value;
    const resultElement = document.getElementById('result')

    const trElement = Array
        .from(trElements)
        .find(element => element.children[1].textContent.includes(textElement))

    

    if (!trElement) {
        resultElement.textContent = 'Not found.'
    } else {
        trElement.remove();
        resultElement.textContent = 'Deleted.'
    }

    textElement = ''
}