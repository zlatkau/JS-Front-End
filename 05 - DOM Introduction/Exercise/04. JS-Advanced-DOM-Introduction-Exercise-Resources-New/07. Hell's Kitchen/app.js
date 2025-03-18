function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let infoElement = document.querySelectorAll('#inputs textarea')[0].value;

      let info = infoElement.split('"').filter(element => element.length > 3)
      console.log(info);

      let restaurants = []
      for (const element of info) {
         let [restaurantName, employees] = element.split(' - ');

         restaurants.push({
            name: restaurantName,
            employees: employees.split(', ').map(empl => empl.split(' '))
         })

      }

      console.log(restaurants)
   }
}