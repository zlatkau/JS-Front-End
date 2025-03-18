function solve() {
   const addProductButtonElements = document.querySelectorAll('button.add-product');
   const textAreaElement = document.querySelector('textarea');
   const checkoutBurronElement = document.querySelector('.checkout')
   let totalPrice = 0;
   let productList = {};

   for (const addButton of addProductButtonElements) {
      addButton.addEventListener('click', () => {
         currentPrice = Number(addButton.parentElement.parentElement.querySelectorAll('.product-line-price')[0].textContent);
         currentProdictName = addButton.parentElement.parentElement.querySelectorAll('.product-title')[0].textContent
         textAreaElement.value += `Added ${currentProdictName} for ${currentPrice.toFixed(2)} to the cart.\n`
         totalPrice += currentPrice;
         productList[currentProdictName] = true
      })
   }

   checkoutBurronElement.addEventListener('click', () => {
      Array.from(addProductButtonElements).forEach(element => element.setAttribute('disabled', 'disabled'))
      checkoutBurronElement.setAttribute('disabled', 'disabled')

      textAreaElement.value += `You bought ${Object.keys(productList).join(', ')} for ${totalPrice.toFixed(2)}.`
   })


   
}