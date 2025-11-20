function swapNumber(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;

    console.log(a, b);
}
swapNumber(3, 5);
swapNumber(10, 7);
swapNumber(-2, 8);
