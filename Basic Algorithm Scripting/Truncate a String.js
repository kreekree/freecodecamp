function truncateString(str, num) {
    // Clear out that junk in your trunk
    let newString = str.slice(0, num);

    if (newString.length !== str.length) {
        return newString + "...";
    } else {
        return newString;
    }
    
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));