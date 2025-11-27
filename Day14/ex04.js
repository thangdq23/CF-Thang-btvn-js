function maskEmail(email) {
    const parts = email.split("@");

    const username = parts[0];
    const domain = parts[1];

    const firstTwoChars = username.substring(0, 2);

    if (username.length <= 2) {
        return username + "***@" + domain;
    } else {
        const start = username.substring(0, 2);

        const end = username.slice(-2);

        return start + "***" + end + "@" + domain;
    }
}

console.log(maskEmail("thang2003@gmail.com"));

console.log(maskEmail("abc12345@yahoo.com"));

console.log(maskEmail("hi@example.vn"));
