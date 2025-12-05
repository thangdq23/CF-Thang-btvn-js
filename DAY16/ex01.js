function filterEvenNumbers(arr) {
  return arr.filter(item => typeof item === "number" && item % 2 === 0);
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); 
console.log(filterEvenNumbers([1, 3, 5, 7]));       
console.log(filterEvenNumbers([]));                   
console.log(filterEvenNumbers([-2, -1, 0, 1, 2]));   