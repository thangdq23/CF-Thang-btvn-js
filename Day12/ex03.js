function sortNumber(a, b, c) {
    if (a > b) {
        a = a + b;
        b = a - b;
        a = a - b;
    }
    if (a > c) {
        a = a + c;
        c = a - c;
        a = a - c;
    }
    if (b > c) {
        b = b + c;
        c = b - c;
        b = b - c;
    }
    console.log(a, b, c);
}
sortNumber(3, 2, 1);
sortNumber(5, 1, 9);
sortNumber(4, 4, 2);
sortNumber(-1, 5, 0);
