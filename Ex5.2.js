function repeat_str(c, str) {
    if (c === 1) {
        return str;
    }
    return repeat_str(c-1, str).concat(str);
}