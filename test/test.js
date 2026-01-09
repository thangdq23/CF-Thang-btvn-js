// console.log(new Number());
// console.log({ Number });

// let x = 0 / 0;
// console.log(Number.isNaN(x));

// let obj1 = { name: "thắng" };
// let obj2 = obj1;
// obj2.name = "An";
// console.log(obj1);

// console.log(Boolean(false));
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));

// console.log("abc" && 1 && [] && 0 && "" && null);

// const x = +window.prompt("Nhap: ");

// if (Number.isInteger(Math.sqrt(x))) {
//   console.log(`${x} la so chinh phuong`);
// } else {
//   console.log(`${x} ko phai la so chinh phuong`);
// }

// console.log({ Number });
// console.log({ Math });

// const x = +window.prompt("nhập: ");
// if (Number.isNaN(x)) {
//   console.log(`ko hợp lệ, nhập lại`);
// }

// Number.isInteger(Math.sqrt(x))
//   ? console.log(`${x} là số chính phương`)
//   : console.log(`${x} ko phải số chính phương`);

// let date = new Date();
// console.log(date);
// console.log({ date });
// console.log({ Date });
// console.log(date.getDate());
// console.log(date.getDay());

// let date2 = new Date("2025-12-21");
// console.log(date2.getDay());

// let date = new Date(window.prompt("Nhập: "));

// switch (date.getDay()) {
//   case 0:
//   case 6:
//     console.log("Cuối tuần");
//     break;
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//     console.log("trong tuần");
//     break;
//   default:
//     console.log("Ko hợp lệ");
//     break;
// }

// let x = 3;
// x % 2 === 0 ? console.log("số chẵn") : console.log("số lẻ");

// for (let i = 0; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   } else {
//     continue;
//   }
// }

// let string = "CodeFarm - Hoc lap trinh cung doanh nghiep";
// let countA = 0;
// for (i = 0; i < string.length; i++) {
//   string[i] === "a" && countA++;
// }
// console.log(countA);

// let str = "Lap trinh JavaScript that de";
// let countT = 0;
// for (let i = 0; i < str.length; i++) {
//   if (str[i] === "t") {
//     countT++;
//   }
// }
// console.log(countT);

// let str = "CodeFarm Hoc Lap Trinh";
// let sum = 0;
// for (let i = 0; i < str.length; i++) {
//   if (str[i] === " ") {
//     sum++;
//   }
// }
// console.log(sum);

// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// let x = +window.prompt("Nhap: ");

// while (Number.isNaN(x) || x <= 0) {
//   console.log("Số ko hợp lệ");
//   console.log(x);
//   break;
// }

// let a = +window.prompt("nhập a:");
// let b = +window.prompt("nhập b:");
// let c = +window.prompt("nhập c:");
// function isTriangle(a, b, c) {
//   if (a + b > c && a + c > b && b + c > a) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
// }

// isTriangle(a, b, c);

// let n = +window.prompt("nhập n:");
// function printSquareNumber(n) {
//   for (let i = 2; i <= n; i++) {
//     Number.isInteger(Math.sqrt(i)) && console.log(i);
//   }
// }
// printSquareNumber(n);

// function printPrimeNumber(n) {
//   for (let i = 2; i <= n; i++) {
//     let isPrime = true;

//     for (let j = 2; j <= Math.sqrt(i); j++) {
//       if (i % j === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       console.log(i);
//     }
//   }
// }

// printPrimeNumber(20);

//=============================================================

// function printPrimeNumber(n) {
//   for (let i = 2; i <= n; i++) {
//     let isPrime = true;
//     for (let j = 2; j <= i / 2; j++) {
//       if (i % j === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       console.log(i);
//     }
//   }
// }

// printPrimeNumber(20);

// function countN(n) {
//   for (let i = 1; i <= n; i++) {
//     let isPrime = true;
//     let count = 0;
//     for (let j = 1; j <= i / 2; j++) {
//       if (i % j === 0) {
//         isPrime = false;
//         break;
//       }

//       for (let k = 1; k <= j.length; k++) {
//         j[k] == count++;
//       }
//     }
//     if (isPrime) {
//       console.log(count);
//     }
//   }
// }
// hàm kiểm tra số nguyên tố
