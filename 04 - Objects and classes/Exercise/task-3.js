function solve(stock, ordered) {
    let stockProduct = stock.filter((product, index) => index % 2 == 0)
    let stockQuantity = stock.filter((quantity, index) => index % 2 != 0)

    let orderedProduct = ordered.filter((product, index) => index % 2 == 0)
    let orderedQuantity = ordered.filter((quantity, index) => index % 2 != 0)

    let inventory = {};

    for (let i=0; i < stockProduct.length; i++) {
        inventory[stockProduct[i]] = Number(stockQuantity[i])
    }

    for (let i=0; i < orderedProduct.length; i++) {
        if (inventory[orderedProduct[i]]) {
            inventory[orderedProduct[i]] += Number(orderedQuantity[i])
        } else {
            inventory[orderedProduct[i]] = Number(orderedQuantity[i])
        }
        
    }
    
    for (const key in inventory) {
        console.log(`${key} -> ${inventory[key]}`);
    }
    


}

solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )