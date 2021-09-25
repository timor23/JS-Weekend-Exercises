function longestWord(str) {
    let words = str.split(` `);
    return  words.reduce(function (longestWord, currentWord) {
        return currentWord.length > longestWord.length ? currentWord : longestWord;
    },words[0]);
}