const textInput = document.getElementById("textInput");
const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");

const MAX_CHAR = 200;

textInput.addEventListener("input", () => {
  const text = textInput.value.trim();

  let words = 0;
  if (text.length > 0) {
    words = text.split(/\s+/).length;
  }
  wordCount.textContent = `Số từ: ${words}`;

  const remainingChars = MAX_CHAR - textInput.value.length;
  charCount.textContent = `Số ký tự còn lại: ${remainingChars}`;

  if (remainingChars <= 20) {
    charCount.classList.add("warning");
  } else {
    charCount.classList.remove("warning");
  }
});
