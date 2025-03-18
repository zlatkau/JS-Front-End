function solve(text='') {
    let pattern = /[A-Z][a-z]*/g

    let matches = [...text.match(pattern)]

    console.log(matches.join(', '))
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan')