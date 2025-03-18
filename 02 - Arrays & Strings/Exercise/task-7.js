function solve(word ='', text = '') {
    let textToArray = text.split(' ');
    let result = '';

    for (const element of textToArray) {
        if (word.toLowerCase() === element.toLowerCase()) {
            result = word;
            break;
        } else {
            result = `${word} not found!` 
        }
    }

    console.log(result);
    
}

solve('python',
'JavaScript is the best programming language'
)