function toggle() {
    let buttonTextElement = document.getElementsByClassName('button')[0]
    let extratextElement = document.getElementById('extra')

    if (buttonTextElement.textContent === 'More') {
        buttonTextElement.textContent = "Less"
        extratextElement.style.display = 'block'
    } else if (buttonTextElement.textContent === 'Less') {
        buttonTextElement.textContent = 'More'
        extratextElement.style.display = 'none'
    }

}