
const fs = require('fs'); // To use FS in TS don't forget to do npm i -D @types/node first
const express = require('express'); // same with npm i -D @types/express
const app = express();

let data = fs.readFileSync('users.json');
let users = JSON.parse(data);

app.listen(5000, () => {
    console.log('listening on port 5000');
})

app.get("/", (req, res) => {
    res.send("OK");
})

// GET - List users
app.get("/users", (req, res) => {
    res.send(users);
})

app.get("/users/:id", (req, res) => {

    var user = null;
    users.forEach(element => {
        if (element.id == req.params.id)
            user = element
    });

    res.send(user);
})

app.post("/addUser", (req, res) => {
    var user = {
        id: req.query.id, 
        name: req.query.name,
        city: req.query.city,
        email:req.query.email,
        hasACat: req.query.hasACat
    };
    users.push(user)
    var userData = JSON.stringify(user);
    var newUsers = JSON.stringify(users);
    fs.writeFile('users.json', newUsers, (err) => {
            if (err) throw err;
            
    })
    res.send(user);
})

app.post("/deleteUser", (req, res) => {
    
    var user = null;
    users.forEach(element => {
        
        {
            
        }
            
    });

    for (let i = 0; i < users.length; i++)
        if (users[i].id == req.query.id)
            users.splice(i,1)

    var newUsers = JSON.stringify(users);
    fs.writeFile('users.json', newUsers, (err) => {
            if (err) throw err;
            
    })
    res.send(users);
})