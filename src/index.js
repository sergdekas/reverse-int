module.exports = function reverse (n) {
    let result = "";
    let str = n.toString();

    for (let i = str.length - 1; i >= 0; i--) {
        result += (str[i] != "-") ? str[i] : "";
    }

    while (result[0] == "0") result = result.slice(1);
    return result;
}
