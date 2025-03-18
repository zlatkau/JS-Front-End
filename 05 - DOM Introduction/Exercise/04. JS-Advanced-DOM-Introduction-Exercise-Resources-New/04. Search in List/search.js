function search() {
   let SerachTextElement = document.getElementById('searchText').value;
   let citiesElement = document.querySelectorAll('#towns li');
   let resultElement = document.getElementById('result')
   let matches = 0


   for (const city of citiesElement) {
      if (city.textContent.includes(SerachTextElement)) {
         city.style.textDecoration = 'underline';
         city.style.fontWeight = 'bold';
         matches += 1
      }
   }

   
   resultElement.innerHTML = `${matches} matches found`

}
