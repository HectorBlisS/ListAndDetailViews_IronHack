const bcrypt = require("bcrypt");

const salt = bcrypt.genSaltSync(256)

const password = "tamal";

const hash = bcrypt.hashSync(password,salt);

console.log(hash);