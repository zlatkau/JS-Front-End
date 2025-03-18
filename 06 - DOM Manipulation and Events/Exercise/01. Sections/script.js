function create(words) {
   const resultElement = document.getElementById('content');

   for (const word of words) {
      const newElement = document.createElement('div');
      const newParagraph = document.createElement('p');
      newParagraph.textContent = word
      newParagraph.style.display = 'none'
      
      newElement.appendChild(newParagraph)
      resultElement.appendChild(newElement)

      newElement.addEventListener('click', () => {
         newParagraph.style.display = 'block'
      })

   }
}