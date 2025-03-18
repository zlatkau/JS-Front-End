function solve(input) {
    let result = []

    for (const entry of input) {
        let [town, latitude, longitude] = entry.split(' | ')
        let info = {
            town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2),
        };

        result.push(info)
    }

    for (const line of result) {
        console.log(line)
    }
}

solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)