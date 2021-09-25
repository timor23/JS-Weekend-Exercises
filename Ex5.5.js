function abbreviate(str){
    return str.split(` `).map(function (word) {
        return word.charAt(0).toUpperCase();
    }).join(`.`);
}