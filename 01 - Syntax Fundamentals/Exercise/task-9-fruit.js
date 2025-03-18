function solve(fruit, weightGr, pricePerKg) {
    let weightKg = weightGr / 1000;
    let tottalprice = weightKg * pricePerKg

    console.log(`I need $${tottalprice.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruit}.`)
}

solve('apple', 1563, 2.35)