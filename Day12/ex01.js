function calcBMI(weight, height) {
    const bmi = Math.round((weight / (height * height)) * 100) / 100;

    let category;
    if (bmi < 18.5) {
        category = "Thiếu cân";
    } else if (bmi >= 18.5 && bmi < 23) {
        category = "Bình thường";
    } else if (bmi >= 23 && bmi < 25) {
        category = "Thừa cân";
    } else {
        category = "Béo phì";
    }

    return `BMI = ${bmi}. ${category}`;
}

console.log(calcBMI(60, 1.7));
console.log(calcBMI(45, 1.6));
console.log(calcBMI(70, 1.65));
console.log(calcBMI(68, 1.75));
console.log(calcBMI(75, 1.7));
