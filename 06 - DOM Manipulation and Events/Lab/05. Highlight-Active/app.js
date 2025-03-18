function focused() {
    const inputElements = document.querySelectorAll('input');

    for (const element of inputElements) {
        element.addEventListener('focus', () => {
            element.parentElement.classList.add('focused');
        })

        element.addEventListener('blur', () => {
            element.parentElement.classList.remove('focused')
        })
    }
}