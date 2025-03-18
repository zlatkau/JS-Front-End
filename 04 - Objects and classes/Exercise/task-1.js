function solve(input) {
    let employessInfo = {}

    for (const person of input) {
        employessInfo[person] = person.length
    }


    for (const empl in employessInfo) {
        console.log(`Name: ${empl} -- Personal Number: ${employessInfo[empl]}`);
    }

}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )