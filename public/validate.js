const { Auth } = require("two-step-auth");

async function login(emailId) {
// const res = await Auth(emailId);
// You can follow this approach,
// but the second approach is suggested,
// as the mails will be treated as important
const res = await Auth(emailId, "My tech");
console.log(res);
console.log(res.mail);
console.log(res.OTP);
console.log(res.success);
}

login("aswin1542000@gmail.com");
