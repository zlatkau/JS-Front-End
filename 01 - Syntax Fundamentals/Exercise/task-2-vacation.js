function solve(numberOfPeople, groupType, weekDay) {
    let pricePerPerson;
    let totalPrice;

    if (weekDay === 'Friday') {
        if (groupType === 'Students') {
            pricePerPerson = 8.45;
        } else if (groupType === 'Business') {
            pricePerPerson = 10.90;
        } else if (groupType === 'Regular') {
            pricePerPerson = 15;
        }
    } else if (weekDay === 'Saturday') {
        if (groupType === 'Students') {
            pricePerPerson = 9.80;
        } else if (groupType === 'Business') {
            pricePerPerson = 15.60;
        } else if (groupType === 'Regular') {
            pricePerPerson = 20;
        }
    } else if (weekDay === 'Sunday') {
        if (groupType === 'Students') {
            pricePerPerson = 10.46;
        } else if (groupType === 'Business') {
            pricePerPerson = 16;
        } else if (groupType === 'Regular') {
            pricePerPerson = 22.50;
        }
    }

    totalPrice = numberOfPeople * pricePerPerson

    if (groupType === 'Students' && numberOfPeople >=30) {
        totalPrice *= 0.85;
    } else if (groupType === 'Business' && numberOfPeople >=100) {
        totalPrice -= 10 * pricePerPerson;
    } else if (groupType === 'Regular' && numberOfPeople >=10 && numberOfPeople <=20) {
        totalPrice *= 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`)

}

solve(40,
    "Regular",
    "Saturday"
    )