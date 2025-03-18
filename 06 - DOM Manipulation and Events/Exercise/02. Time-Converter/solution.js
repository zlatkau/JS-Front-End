function attachEventsListeners() {
    const daysInputElement = document.getElementById('days')
    const hoursInputElement = document.getElementById('hours')
    const minutesInputElement = document.getElementById('minutes')
    const secondsInputElement = document.getElementById('seconds')

    const daysConvertButton = document.getElementById('daysBtn') 
    const hoursConvertButton = document.getElementById('hoursBtn') 
    const minutesConvertButton = document.getElementById('minutesBtn') 
    const secondsConvertButton = document.getElementById('secondsBtn')

    daysConvertButton.addEventListener('click', () => {
        if (daysInputElement.value === '') {
            if (hoursInputElement !== '') {
                daysInputElement.value = Number(hoursInputElement.value) / 24;
            } else if (minutesInputElement.value !== '') {
                daysInputElement.value = Number(minutesInputElement.value) / 1440;
            } else if (secondsInputElement !== '') {
                daysInputElement.value = Number(secondsInputElement.value) / 86400;
            }

            }
        
        hoursInputElement.value = 24 * Number(daysInputElement.value);
        minutesInputElement.value = 1440 * Number(daysInputElement.value);
        secondsInputElement.value = 86400 * Number(daysInputElement.value);
        })

    hoursConvertButton.addEventListener('click', () => {
        if (hoursInputElement.value === '') {
            if (daysInputElement.value !== '') {
                hoursInputElement.value = 24 * Number(daysInputElement.value);
            } else if (minutesInputElement.value !== '') {
                hoursConvertButton.value = Number(minutesInputElement.value) / 60;
            } else if (secondsInputElement !== '') {
                hoursConvertButton.value = Number(secondsInputElement.value) / 1440;
            }
        }

        daysInputElement.value = Number(hoursInputElement.value) / 24;
        minutesInputElement.value = 60 * Number(hoursInputElement.value);
        secondsInputElement.value = 3600 * Number(hoursInputElement.value);
    })

    minutesConvertButton.addEventListener('click', () => {
        if (minutesInputElement.value === '') {
            if (daysInputElement.value !== '') {
                minutesInputElement.value = 1440 * Number(daysInputElement.value);
            } else if (hoursInputElement !== '') {
                minutesInputElement.value = 60 * Number(hoursInputElement.value);
            } else if (secondsInputElement !== '') {
                minutesInputElement.value = Number(secondsInputElement.value) / 60;
            }
        }

        daysInputElement.value = Number(minutesInputElement.value) / 1440;
        hoursInputElement.value = Number(minutesInputElement.value) / 60;
        secondsInputElement.value = 60 * Number(minutesInputElement.value);
    })

    secondsConvertButton.addEventListener('click', () => {
        if (secondsInputElement.value === '') {
            if (daysInputElement.value !== '') {
                secondsInputElement.value = 86400 * Number(daysInputElement.value);
            } else if (hoursInputElement !== '') {
                secondsInputElement.value = 3600 * Number(hoursInputElement.value)
            } else if (minutesInputElement.value !== '') {
                secondsInputElement.value = 60 * Number(minutesInputElement.value);
            }
        }
        daysInputElement.value = Number(secondsInputElement.value) / 86400;
        hoursInputElement.value = Number(secondsInputElement.value) / 1440;
        minutesInputElement.value = Number(secondsInputElement.value) / 60;

    })

}
