function isogram(str) {
    let chars = ``;
    str = str.split('');
    for (let i = 0 ; i < str.length ; i++) {
        if (chars.includes(str[i].toLowerCase())) {
            return false;
        } else {
            chars += str[i].toLowerCase();
        }
    }
    return true;
}