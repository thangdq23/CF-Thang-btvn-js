function sortArrNumber(arr) {
  const result = [...arr];

  const length = result.length;

  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (result[j] > result[j + 1]) {
        const temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }

  return result;
}

const number = [4, 2, 7, 6, 5, 8, 2, 1];

const result = sortArrNumber(number);
console.log(result); // [1, 2, 2, 4, 5, 6, 7, 8]
