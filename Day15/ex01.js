function findNearest(arr, x) {
    let nearest = arr[0];
    let minDiff = Math.abs(arr[0] - x);

    for (let i = 1; i < arr.length; i++) {
        let diff = Math.abs(arr[i] - x);
        if (diff < minDiff) {
            minDiff = diff;
            nearest = arr[i];
        }
    }

    return nearest;
}

console.log(findNearest([2, 15, 30, 55, 60, 77, 90], 58));
