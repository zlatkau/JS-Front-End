function addItem() {
    const mailListElements = document.getElementById('items');
    const textElement = document.getElementById('newItemText');

    const newElement = document.createElement('li');
    newElement.textContent = textElement.value;

    mailListElements.appendChild(newElement)
    textElement.value = ''
}