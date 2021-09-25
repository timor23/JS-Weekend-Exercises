function tribonacci(sig, n) {     //sequence starts with 1
    if (n === 0) {
        return [];
    }
    if (n === 1) {
        return sig[0];
    }
    if (n === 2) {
        return [sig[0], sig[1]];
    }
    if (n === 3) {
        return [sig[0], sig[1], sig[2]];
    }

    let r = tribonacci(sig, n - 1);
    r.push(r[n - 2] + r[n - 3] + r[n - 4]);
    return r;
}
