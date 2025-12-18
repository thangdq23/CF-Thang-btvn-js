function convertArrayToObject(array) {
  const result = {};

  for (let i = 0; i < array.length; i++) {
    const [key, value] = array[i].split(":");
    result[key] = value;
  }

  return result;
}

const arrayString = ["name:John", "age:30", "city:NY"];

console.log(convertArrayToObject(arrayString));
// { name: 'John', age: '30', city: 'NY' }
