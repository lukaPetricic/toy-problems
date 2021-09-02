function URLify(string) {
    return string.trim().split(' ').join('%20');
}
console.log(URLify('Mr John Smith  M  '));
