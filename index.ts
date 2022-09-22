const fs = require('fs'); // To use FS in TS don't forget to do npm i -D @types/node first

let data = fs.readFileSync('users.json');
let users = JSON.parse(data);

console.log(users);