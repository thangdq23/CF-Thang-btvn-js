// bài 1: tạo id ngẫu nhiên
// const listCharacters =
//   "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
// function generateId(length, prefix = "") {
//   // kiểm tra length
//   if (!Number.isInteger(length) || length <= 0 || length >= 100) {
//     return "length ko hợp lệ";
//   }
//   // tạo 1 chuỗi rỗng để nối các kí tự random vào
//   let randomString = "";
//   for (let i = 0; i < length; i++) {
//     const randomIndex = Math.floor(Math.random() * listCharacters.length);
//     randomString += listCharacters[randomIndex];
//   }
//   return prefix + randomString;
// }

// console.log(generateId(8));

// bài 1: tạo ra id ngẫu nhiên
// const listCharacters =
//   "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
// function generateId(length, prefix) {
//   // kiểm tra length
//   if (!Number.isInteger(length) || length <= 0 || length >= 100) {
//     return "ko hợp lệ";
//   }
//   // tạo chuỗi rỗng để nối từ random vào
//   let randomString = "";
//   // vòng lặp
//   for (i = 0; i < length; i++) {
//     let randomIndex = Math.floor(Math.random(listCharacters.length));
//     randomString += randomIndex[listCharacters];
//   }
//   return prefix + randomString;
// }

// function highlightKeyword(content, keyword) {
//   // Kiểm tra dữ liệu
//   if (typeof content !== "string" || typeof keyword !== "string") {
//     return "Invalid";
//   }

//   if (keyword.trim() === "") {
//     return content;
//   }

//   const regex = new RegExp(keyword, "gi");

//   // Nếu không có keyword
//   if (!regex.test(content)) {
//     return content;
//   }

//   return content.replace(regex, (match) => {
//     return `<strong>${match}</strong>`;
//   });
// }

function highlightKeyword(content, keyword) {
  if (typeof content !== "string" || typeof keyword !== "string") {
    return "invalid";
  }
  if (keyword.trim() === "") {
    return content;
  }
  const regex = new RegExp(keyword, "gi");

  if (!regex.test(content)) {
    return content;
  }
  return content.replace(regex, (match) => {
    return `<strong>${match}</strong>`;
  });
}
console.log(highlightKeyword(
  "Học JavaScript không khó, Học javascript khó đã có CodeFarm lo, CodeFarm - Học là có việc!",
  "javascript"
));
