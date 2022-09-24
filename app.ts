
const fs = require('fs'); // To use FS in TS don't forget to do npm i -D @types/node first
const express = require('express'); // same with npm i -D @types/express
const app = express();
const port = 5000;
var dataPath = 'users.json';
let data = fs.readFileSync(dataPath);
let users = JSON.parse(data);

app.listen(port, () => {
    console.log('listening on port ' + port);
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/pages/howto.html'); //don't forget to add "types": [ "node" ] to make __dirname work on TS
})

// GET - list users
app.get("/v1/users", (req, res) => {

    try
    {
        setTimeout( function() { // async function
            res.status(200).send(users); // send the users as json data with status code 200 (Accepted)
        }, 100 );
    }
    catch (error)
    {
        console.log(error);
        res.status(500).send("Users couldn't be fetched: check the console for more information.");
    }

})


// GET - get user
app.get("/v1/users/:id", (req, res) => {

    try
    {
        setTimeout( function() { // async function
            
            users.forEach(user => { // for each user
                if (user.id == req.params.id) // do we have a matching user id with the parameter?
                    res.status(200).send(user); // send it
            });
        
        }, 100 );
    }
    catch (error)
    {
        console.log(error);
        res.status(500).send("User could not be fetched: check the console for more information.");
    }

})

// POST - add user
app.post("/v1/addUser", (req, res) => {

    try
    {
        setTimeout( function() { // async function
            
            var user = {
                id: req.query.id, 
                name: req.query.name,
                city: req.query.city,
                email:req.query.email,
                hasACat: req.query.hasACat
            };
            users.push(user);
            var newUsers = JSON.stringify(users);
            fs.writeFile(dataPath, newUsers, (err) => { if (err) throw err;} )
            res.status(201).send(user); 
        
        }, 100 );
    }
    catch (error)
    {
        console.log(error);
        res.status(500).send("User could not be fetched: check the console for more information.");
    }

})

// POST - delete user
app.post("/v1/deleteUser", (req, res) => {
    
    try
    {
        setTimeout( function() { // async function

            for (let i = 0; i < users.length; i++)
                if (users[i].id == req.query.id)
                    users.splice(i,1)

            var newUsers = JSON.stringify(users);
            fs.writeFile(dataPath, newUsers, (err) => { if (err) throw err; })
            res.status(202).send(users);

        }, 100 );
    }
    catch (error)
    {
        console.log(error);
        res.status(500).send("User could not be fetched: check the console for more information.");
    }
})