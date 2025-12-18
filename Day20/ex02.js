const categories = [
  { id: 1, name: "Chuyên mục 1", parent: 0 },
  { id: 2, name: "Chuyên mục 2", parent: 0 },
  { id: 3, name: "Chuyên mục 3", parent: 0 },
  { id: 4, name: "Chuyên mục 2.1", parent: 2 },
  { id: 5, name: "Chuyên mục 2.2", parent: 2 },
  { id: 6, name: "Chuyên mục 2.3", parent: 2 },
  { id: 7, name: "Chuyên mục 3.1", parent: 3 },
  { id: 8, name: "Chuyên mục 3.2", parent: 3 },
  { id: 9, name: "Chuyên mục 3.3", parent: 3 },
  { id: 10, name: "Chuyên mục 2.2.1", parent: 5 },
  { id: 11, name: "Chuyên mục 2.2.2", parent: 5 },
];

function convertNested(arr) {
  const map = {};
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const { id, name } = arr[i];
    map[id] = { id, name };
  }

  for (let i = 0; i < arr.length; i++) {
    const { id, parent } = arr[i];

    if (parent === 0) {
      result.push(map[id]);
    } else {
      if (!map[parent].children) {
        map[parent].children = [];
      }
      map[parent].children.push(map[id]);
    }
  }

  return result;
}

const categoriesNested = convertNested(categories);

console.log(categoriesNested);
