function soleve(text) {
    let pattern = new RegExp ('#([a-zA-Z]+[a-zA-Z])', 'gm')

    // let pattern = /#([a-zA-Z]+[^#a-zA-Z\d])/g
    let matches = [...text.matchAll(pattern)];

    for (const match of matches) {
        console.log(match[1]);
    }
    // console.log(Array.from(matches));

}

soleve('Nowadays everyone uses # to tag a #special word in #socialMedia')