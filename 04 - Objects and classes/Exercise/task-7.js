function solve(text) {
    let words = text.split(' ')
    let wordDict = {}

    for (const word of words) {
        if (!wordDict[word.toLowerCase()]) {
            wordDict[word.toLowerCase()] = 0
        }

        wordDict[word.toLowerCase()] += 1
    }
    
    let result = []
    for (const key of Object.entries(wordDict).sort((a, b) => b[1] - a[1])) {
        if (key[1] % 2 != 0) {
            result.push(key[0])
        }
    }

    console.log(result.join(' '));
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')