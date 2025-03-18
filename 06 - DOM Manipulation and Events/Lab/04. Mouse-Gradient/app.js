function attachGradientEvents() {
    const gradientElement = document.getElementById('gradient');
    const resultElement = document.getElementById('result');

    gradientElement.addEventListener('mousemove', (event) => {
        let resultPercent = Math.trunc(event.offsetX / event.target.clientWidth * 100)

        resultElement.textContent = resultPercent + '%'
    })

}