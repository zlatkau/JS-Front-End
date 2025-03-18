function smallestNumber(a, b, c) {
    let minNum = a;

    if (b <= minNum) {
        minNum = b
    }

    if (c <= minNum) {
        minNum = c
    }

    console.log(minNum);
}

smallestNumber(2,
    5,
    3
    )