function countWords(str) {
    if (!str || str === "") {
        return 0;
    }

    str = str.trim();

    while (str.includes("  ")) {
        str = str.replace("  ", " ");
    }

    let count = 1;
    for (i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            count = count + 1;
        }
    }

    return count;
}

console.log(countWords("     Hôm nay trời   đẹp quá  "));
