function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let trElements = document.querySelectorAll('.container tbody tr');
      let searchElement = document.getElementById('searchField');
      let searchText = searchElement.value;

      for (const trElement of trElements) {
         let tdElements = trElement.querySelectorAll('td');
         isSelected = false;

         trElement.classList.remove('select');

         for (const tdElement of tdElements) {
            if (tdElement.textContent.includes(searchText)) {
               isSelected = true;
               break;
            }
         }

         if (isSelected) {
            trElement.classList.add('select')
         }

      }

      searchElement.value = '';

   }
}