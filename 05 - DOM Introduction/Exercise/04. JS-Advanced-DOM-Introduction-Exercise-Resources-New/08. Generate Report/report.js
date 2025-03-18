function generateReport() {
    const headerElements = document.querySelectorAll('table thead th');
    const trElements = document.querySelectorAll('table tbody tr');
    const outputElement = document.getElementById('output');

    const columsMapping = Array
        .from(headerElements)
        .map(thElement => {
            const checkboxElement = thElement.querySelector('input')

            return {
                name: checkboxElement.name,
                active: checkboxElement.checked
            }
        })

    
        
    const reportData = Array
        .from(trElements)
        .map(trElement => {
            const tdElements = trElement.querySelectorAll('td');

            const result = Array
                .from(tdElements)
                .reduce((data, tdElement, i) => {
                    if (!columsMapping[i].active) {
                        return data;
                    }
                    const columName = columsMapping[i].name
                    data[columName] = tdElement.textContent;

                    return data;
                } , {})

            return result
        })

    outputElement.value = JSON.stringify(reportData, null, 2)
}