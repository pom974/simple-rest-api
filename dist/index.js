const fs = require('fs'); // To use FS in TS don't forget to do npm i -D @types/node first
const express = require('express'); // same with npm i -D @types/express
const app = express();
let data = fs.readFileSync('users.json');
let users = JSON.parse(data);
app.listen(5000, () => {
    console.log('listening on port 5000');
});
app.get("/", (req, res) => {
    res.send("OK");
});
// GET - List users
app.get("/users", (req, res) => {
    res.send(users);
});
app.get("/users/:id", (req, res) => {
    var user = null;
    users.forEach(element => {
        if (element.id == req.params.id)
            user = element;
    });
    res.send(user);
});
app.post("/addUser", (req, res) => {
    var user = {
        id: req.params.id,
        name: req.params.name,
        city: req.params.city,
        email: req.params.email,
        hasACat: req.params.hasACat
    };
    var userData = JSON.stringify(user);
    fs.writeFile('users.json', userData, (err) => {
        if (err)
            throw err;
    });
    res.send(userData);
});
//# sourceMappingURL=index.js.map