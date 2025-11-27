function isPalindrome(str) {
    let clearStr = str.toLowerCase();
    clearStr = clearStr.split(" ").join("");

    let reversed = clearStr.split("").reverse().join("");

    return clearStr === reversed;
}

console.log(isPalindrome("Race car"));
console.log(isPalindrome("hello"));
