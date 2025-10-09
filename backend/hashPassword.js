import bcrypt from "bcryptjs";

const password = "MyAdminPassword123"; // Replace with your admin password
const saltRounds = 10; // 10 is recommended

const hashedPassword = bcrypt.hashSync(password, saltRounds);
console.log("Hashed password:", hashedPassword);
