function solve(char1, char2){
    let smallerCharCode = (a = '', b = '') => a.charCodeAt() < b.charCodeAt() ? a.charCodeAt() : b.charCodeAt();
    let bigerCharCode = (a = '', b = '') => a.charCodeAt() > b.charCodeAt() ? a.charCodeAt() : b.charCodeAt();
    
    function enumerateSymbols(code1, code2) {
        let result = []

        for (let index = code1 + 1; index < code2; index++) {
            result.push(String.fromCharCode(index))
        }

        return console.log(result.join(" "))

    }

    let start = smallerCharCode(char1, char2);
    let end = bigerCharCode(char1, char2);

    enumerateSymbols(start, end)

}

solve('#',
':'
)