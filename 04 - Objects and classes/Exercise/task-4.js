function solve(input) {
    let movies = [];

    for (const line of input) {
        if (line.includes('addMovie')) {
            let title = line.split('addMovie ')[1];
            let currentMovie = {}
            currentMovie.name = title;
            movies.push(currentMovie)

        } else if (line.includes('directedBy')) {
            let [title, director] = line.split(' directedBy ');
            for (const movie of movies) {
                if (movie.name === title) {
                    movie.director = director
                }
            }
        } else if (line.includes('onDate')) {
            let [title, date] = line.split(' onDate ');
            for (const movie of movies) {
                if (movie.name === title) {
                    movie.date = date
                }
            }
        }
    }
    
    for (const m of movies) {
        if (m.name && m.director && m.date) {
            console.log(JSON.stringify(m));
        }
        
    }



}

solve([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]
    
    )