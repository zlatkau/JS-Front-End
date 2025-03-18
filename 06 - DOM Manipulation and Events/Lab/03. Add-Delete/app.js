function addItem() {
    const itemsListElement = document.getElementById('items');
    const textInput = document.getElementById('newItemText');

    const newIntemElement = document.createElement('li');
    newIntemElement.textContent = textInput.value;

    const deleteLinkElement = document.createElement('a');
    deleteLinkElement.textContent = '[Delete]'
    deleteLinkElement.href = '#';

    deleteLinkElement.addEventListener('click', () => {
        newIntemElement.remove()
    })

    newIntemElement.appendChild(deleteLinkElement)
    itemsListElement.appendChild(newIntemElement)

    textInput.value = '';


}