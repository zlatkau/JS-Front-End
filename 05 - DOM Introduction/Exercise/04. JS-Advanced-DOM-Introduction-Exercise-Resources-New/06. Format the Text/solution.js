function solve() {
  let text = document.getElementById('input').value;
  let outputElement = document.getElementById('output');

  const result = text
    .split('.')
    .filter(sentence => sentence)
    .reduce((result, sentence, i) => {
        const currentIndex = Math.floor(i / 3)
        
        if (!result[currentIndex]) {
          result[currentIndex] = []
        }

        result[currentIndex].push(sentence.trim())

        return result;

    }, [])
    .map(paragraph => `<p>${paragraph.join('. ')}.</p>`)
    .join('\n');

  outputElement.innerHTML = result 

}