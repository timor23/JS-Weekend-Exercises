function organizeStrings(str1, str2) {
    let newStr = [];
    str1 = str1.concat(str2).split(``);
    str1.forEach((char)=> {
        if (!newStr.includes(char)) {
            newStr.push(char);
        }
    });
    return newStr.sort().join(``);
}
