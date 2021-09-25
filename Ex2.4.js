function findUniq(arr) {
    let commNum;
    let sum = 0;
    if (arr[0] === arr[1]) {
        commNum = arr[0];
    } else {
        if (arr[0] === arr[2]){
            return arr[1];
        } else return arr[0];
    }
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum - commNum * (arr.length - 1);
}


