function solve(words, text) {
    let textInArray = text.split(' ');
    let wordsToCheck = words.split(', ')

    for (let i=0; i < textInArray.length; i++) {
        for (const word of wordsToCheck) {
            if (textInArray[i].startsWith('*') && textInArray[i].length === word.length) {
                textInArray[i] = word
            } 
        }
    }

    console.log(textInArray.join(' '));
}

solve('great',
'softuni is ***** place for learning new programming languages'
)