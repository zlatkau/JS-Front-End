function solve(input) {
    let parkingLot = {};

    for (const line of input) {
        let [command, registration] = line.split(', ');

        parkingLot[registration] = command
    }

    let count = 0

    for (const car of Object.entries(parkingLot).sort((a, b) => a[0].localeCompare(b[0]))) {
        if (car[1] === 'IN') {
            console.log(car[0]);
            count += 1
        }
    }

    if (count === 0) {
        console.log('Parking Lot is Empty');
    }
}

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
)