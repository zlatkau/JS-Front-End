function solve(text, word) {
    let words = text.split(' ')
    let counter = 0

    for (const element of words) {
        if (element === word) {
            counter +=1
        }
    }

    console.log(counter);
}

solve('This is a word and it also is a sentence',
'is')