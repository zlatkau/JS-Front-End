function solve(input){
    let words = input.shift().split(' ');
    let wordsDics = {}

    for (const word of words) {
        num = input.filter(x => x === word).length
        wordsDics[word] = num

    }

    sortedWordsDict = Object.entries(wordsDics).sort((a, b) => b[1] - a[1])

    for (const entry of sortedWordsDict) {
            console.log(`${entry[0]} - ${entry[1]}`);
        }
    
}

solve([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
    
    )