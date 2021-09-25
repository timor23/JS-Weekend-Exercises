function PeopleInBus(arr) {
    let ppl = 0;
    for (let i = 0; i < arr.length; i++) {
        ppl += arr[i][0] - arr[i][1];
    }
    return ppl;
}
