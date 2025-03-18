function addItem() {
    const newTextElement = document.getElementById('newItemText');
    const newValueElement = document.getElementById('newItemValue');
    const menuElement = document.getElementById('menu');

    const newOptionElement = document.createElement('option');
    newOptionElement.textContent = newTextElement.value;
    newOptionElement.value = newValueElement.value;

    menuElement.appendChild(newOptionElement)

    newTextElement.value = '';
    newValueElement.value = '';

}