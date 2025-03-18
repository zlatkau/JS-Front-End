function solve(input) {
    let dict = {}

    for (const line of input.map(JSON.parse)) {
        const word = Object.keys(line)[0];

        dict[word] = line[word];
    }
    
    Object.entries(dict)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(([term, definition]) => console.log(`Term: ${term} => Definition: ${definition}`));
}

solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
    '{"Tape":"new for tape"}',
    ]
    )