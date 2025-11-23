let n = +window.prompt("Nhập n:");
if (Number.isNaN(n)) {
    console.log("n không hợp lệ ");
}
function printSquareNumber(n) {
    for (i = 2; i <= n; i++) {
        Number.isInteger(Math.sqrt(i)) && console.log(i);
    }
}
printSquareNumber(n);
