function removeDuplicates(arr) {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  });
}

console.log(removeDuplicates([1, 2, 2, 3, 3, 3, 4]));  

console.log(removeDuplicates(["a", "b", "a", "c", "b"]));  

console.log(removeDuplicates([]));  
