function shortNumber(num) {
    if (num >= 1000000) {
        let result = (num / 1000000).toFixed(1);

        if (result.endsWith(".0")) {
            result = result.slice(0, -2);
        }

        return result + "M";
    } else if (num >= 1000) {
        let result = (num / 1000).toFixed(1);

        if (result.endsWith(".0")) {
            result = result.slice(0, -2);
        }

        return result + "K";
    } else {
        return num.toString();
    }
}

console.log(shortNumber(1500));
console.log(shortNumber(2000000));
console.log(shortNumber(800));
