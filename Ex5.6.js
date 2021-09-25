function maskify(str) {
    return str.replace(/.(?=.{4})/g, "#");
}