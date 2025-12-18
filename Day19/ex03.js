Array.prototype.filter2 = function (callback) {
  const result = [];
    
  const length = this.length;

  for (let i = 0; i < length; i++) {
    if (i in this) {
      if (callback(this[i], i, this)) {
        result.push(this[i]);
      }
    }
  }

  return result;
};

// Sample usage
const arr = [1, 2, 3, 4, 5];
const result = arr.filter2((value) => {
  return value % 2 !== 0;
});
console.log(result); // [1, 3, 5]
