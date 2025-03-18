function solve(input) {
    let heros = [];

    for (const line of input) {
        let [name, level, items] = line.split(' / ');
        let currentHero = {
            name,
            level: Number(level),
            items,
        };

        heros.push(currentHero)
    }
    for (const hero of heros.sort((a, b) => a.level - b.level)) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
    
}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    )


