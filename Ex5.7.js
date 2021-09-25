function shortestWord(str) {
    let words = str.split(` `);
    let shortest =  words.reduce(function (shortestWord, currentWord) {
        return currentWord.length < shortestWord.length ? currentWord : shortestWord;
    },words[0]);
    return shortest.length;
}