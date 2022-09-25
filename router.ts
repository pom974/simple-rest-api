const userController = require('./users.ts');

var express = require('express'), router = express.Router();


// GET - list users
router.get("/users", (req, res) => {

    try
    {
        setTimeout( function() { // async function
            res.status(200).send( userController.GetUsers() ); // send the users as json data with status code 200 (Accepted)
        }, 100 );
    }
    catch (error)
    {
        console.log(error);
        res.status(500).send("Users couldn't be fetched: check the console for more information.");
    }

})


// GET - get user
router.get("/users/:id", (req, res) => {

    try
    {
        setTimeout( function() { // async function
            
            var user = userController.GetUser(req.params.id);
            res.status(200).send( user );
        
        }, 100 );
    }
    catch (error)
    {
        console.log(error);
        res.status(500).send("User could not be fetched: check the console for more information.");
    }

})

// POST - add user
router.post("/addUser", (req, res) => {

    try
    {
        setTimeout( function() { // async function
            
            var user = {
                _id:req.query._id, 
                name:req.query.name,
                city:req.query.city,
                email:req.query.email,
                hasACat:req.query.hasACat 
            }
                
            res.status(201).send(userController.AddUser(user)); 
        
        }, 100 );
    }
    catch (error)
    {
        console.log(error);
        res.status(500).send("User could not be fetched: check the console for more information.");
    }

})

// POST - delete user
router.post("/deleteUser", (req, res) => {
    
    try
    {
        setTimeout( function() { // async function

            res.status(202).send(userController.DeleteUser(req.query._id)); 

        }, 100 );
    }
    catch (error)
    {
        console.log(error);
        res.status(500).send("User could not be fetched: check the console for more information.");
    }
})

module.exports = router