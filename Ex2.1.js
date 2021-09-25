function sumOfLowestNumbers(arr){
    let lowes = [];
    if (arr[0] <= arr[1]){
        lowest = [arr[0], arr[1]];
    } else {
        lowest = [arr[1], arr[0]];
    }

    for (let i = 2; i < arr.length; i++) {
        if (arr[i] <= lowest[0]){
            lowest[1] = lowest[0];
            lowest[0] = arr[i];
        } else {
            if (arr[i] <= lowest[1]){
                lowest[1] = arr[i];
            }
        }
    }
    return lowest[0] + lowest[1];
}