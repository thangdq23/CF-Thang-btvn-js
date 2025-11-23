let n = +window.prompt("Nhập n:");
if (Number.isNaN(n) || n < 2) {
    console.log("n không hợp lệ ");
}
function printPrimeNumber(n) {
    for (i = 2; i <= n; i++) {
        let isPrime = true;

        for (j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log(i);
        }
    }
}

printPrimeNumber(n);
