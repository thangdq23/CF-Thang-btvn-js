const nums = [1, 2, 3, 10, 11, 12, 13, 15, 16];

const result = nums.reduce(
  (acc, num, index) => {
    if (index === 0 || num === nums[index - 1] + 1) {
      acc.current.push(num);
    } else {
      acc.current = [num];
    }

    if (acc.current.length > acc.best.length) {
      acc.best = [...acc.current];
    }

    return acc;
  },
  { current: [], best: [] }
);

console.log(result.best); 
