function countDup(str) {
    let chars = ``;
    let count = 0;
    str = str.split('');
    str.forEach((char) => {
        if (chars.includes(char.toLowerCase())) {
            count++;
        } else {
            chars += char.toLowerCase();
        }
    });
    return count;
}