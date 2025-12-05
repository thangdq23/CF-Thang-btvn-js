function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function findMinMaxAverage(arr) {
  if (arr.length === 0) return null;

  let max = arr[0], min = arr[0];
  let maxIndex = 0, minIndex = 0;

  let primeSum = 0;
  let primeCount = 0;

  arr.forEach((value, index) => {
    if (value > max) {
      max = value;
      maxIndex = index;
    }

    if (value < min) {
      min = value;
      minIndex = index;
    }

    if (isPrime(value)) {
      primeSum += value;
      primeCount++;
    }
  });

  let primeAverage = primeCount > 0 ? +(primeSum / primeCount).toFixed(2) : null;

  return {
    max,
    maxIndex,
    min,
    minIndex,
    primeAverage
  };
}

console.log(findMinMaxAverage([3, 1, 4, 1, 5, 9, 2, 6]));

console.log(findMinMaxAverage([5, 5, 2, 2, 1]));

console.log(findMinMaxAverage([-3, 7, -8, 11, 0]));
