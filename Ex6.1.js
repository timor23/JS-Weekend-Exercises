function accum(str) {
    str = str.split(``);
    let ret = '';
    for (let i = 0; i < str.length; i++) {
        ret += str[i].toUpperCase();
        ret += str[i].repeat(i).toLowerCase();
        if (i < str.length - 1) {
            ret += `-`;
        }
    }
    return ret;
}

console.log(accum('Timor'));