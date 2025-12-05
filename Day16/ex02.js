function filterLongStrings(arr) {
  return arr.filter(item => typeof item === "string" && item.length > 5);
}

console.log(filterLongStrings(["hello", "world", "javascript", "nodejs"]));

console.log(filterLongStrings(["hi", "hello world", "a b c", "goodbye!!"]));

console.log(filterLongStrings(["hi", "bye", "yes"])); 
