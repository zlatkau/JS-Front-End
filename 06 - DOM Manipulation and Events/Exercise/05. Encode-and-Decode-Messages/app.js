function encodeAndDecodeMessages() {
    const incommingElement = document.querySelector('#main div:nth-child(1) textarea');
    const decodedElement = document.querySelector('#main div:nth-child(2) textarea');
    const encodeButton = document.querySelector('#main div:nth-child(1) button');
    const decodeButton = document.querySelector('#main div:nth-child(2) button');
    let codedMessage = ''
    let decodedMessage = ''

    encodeButton.addEventListener('click', () => {
        for (const letter of incommingElement.value) {
            codedMessage += String.fromCharCode(letter.charCodeAt() + 1)
        }

        // decodedMessage = incommingElement.value
        incommingElement.value = ''
        decodedElement.value = codedMessage
        
        

    })

    incommingElement.addEventListener('focus', ()  => {
        decodedMessage = ''
        codedMessage = ''
        decodedElement.value = ''
    } )

    decodeButton.addEventListener('click', () => {
        for (const lett of decodedElement.value) {
            decodedMessage += String.fromCharCode(lett.charCodeAt() - 1)
        }

        decodedElement.value = decodedMessage
        // decodedElement.value = ''
    })
    
    
}