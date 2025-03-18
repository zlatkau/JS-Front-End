function lockedProfile() {
    const uncheckedRadionElements = document.querySelectorAll('input[value=unlock]')
    const checkedRadioElement = document.querySelectorAll('input[value=lock]')
    const profileElements = document.querySelectorAll('.profile')
    
    
    for (const checkElement of uncheckedRadionElements) {
        checkElement.addEventListener('click', () => {
            checkElement.setAttribute('checked', true)
            checkElement.parentElement.querySelector('input[value=lock]').setAttribute('checked', false)
            checkElement.parentElement.querySelector('button').removeAttribute('disabled')
        })
    }

    for (const uncheckElement of checkedRadioElement) {
        uncheckElement.addEventListener('click', () => {
            uncheckElement.setAttribute('checked', true)
            uncheckElement.parentElement.querySelector('input[value=unlock]').setAttribute('checked', false)
            uncheckElement.parentElement.querySelector('button').setAttribute('disabled', true)

        })
    }

    for (const profile of profileElements) {
        showMorebutton = profile.querySelector('button')

        showMorebutton.addEventListener('click', (event) => {
            console.log(profile.querySelector('input[value=unlock]').checked);
            if (profile.querySelector('input[value=unlock]').checked) {

                if (event.target.textContent === 'Show more') {
                    profile.querySelector('div').style.display = 'block'
                    event.target.textContent = 'Hide it'
                } else {
                    profile.querySelector('div').style.display = 'none'
                    event.target.textContent = 'Show more'
                }
            } 
        })
    }

}

