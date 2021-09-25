function findNextSquare(num) {
    if (Math.sqrt(num) % 1 > 0){
        return -1;
    }

    let sqrt = Math.sqrt(num);
    sqrt++;
    return sqrt * sqrt;
}