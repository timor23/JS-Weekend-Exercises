function binToDec(arr) {
    let decNumber = 0;
    let exp = 0;
    for (let i = arr.length - 1 ; i >= 0 ; i--) {
        decNumber += arr[i] * Math.pow(2,exp);
        exp++;            
    }
    return decNumber;
}