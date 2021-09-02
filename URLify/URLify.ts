function URLify(string: string): string {
    return string.trim().split(' ').join('%20');
}

console.log(URLify('Mr John Smith'));