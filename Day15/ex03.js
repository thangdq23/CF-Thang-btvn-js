function insertNumber(arr, num) {
    if (typeof num !== "number" || Number.isNaN(num)) {
        let cleaned = [];

        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] === "number" && !Number.isNaN(arr[i])) {
                cleaned.push(arr[i]);
            }
        }

        cleaned.sort((a, b) => a - b);

        return cleaned;
    }

    let cleaned = [];

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number" && !Number.isNaN(arr[i])) {
            cleaned.push(arr[i]);
        }
    }

    cleaned.sort((a, b) => a - b);

    if (cleaned.length === 0) return [num];

    let inserted = false;
    for (let i = 0; i < cleaned.length; i++) {
        if (num <= cleaned[i]) {
            cleaned.splice(i, 0, num);
            inserted = true;
            break;
        }
    }

    if (!inserted) cleaned.push(num);

    return cleaned;
}

console.log(insertNumber([1, 3, 5, 7, 9], 6));

console.log(insertNumber([3, "hello", 1, NaN, 4, null], 2));

console.log(insertNumber([], 5));

console.log(insertNumber([-1, 10, -5, "abc"], -3));

console.log(insertNumber([5, 2, 8], NaN));
