function toCamelCase(str) {
    return str.split(/[\s-_]+/).map(function (word, index) {
        if (index == 0) { // first word
            return word;
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join('');
}