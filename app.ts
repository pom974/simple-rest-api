var express = require('express'), app = express(); // To use FS in TS don't forget to do npm i -D @types/node first
const apiRouter = require('./router.ts');
const port = 3000; // port has changed from 5000 to 3000 because of MongoDb

// ---------------------------------------------------------------------
// MONGO DB CODE - FOR TESTING PURPOSES
// ---------------------------------------------------------------------
/*
const mongodb = require('mongodb'); // same, import types with npm i -D @types/mongodb
let mgClient = mongodb.MongoClient;
let mgPort = "27017";
let mgUrl = "mongodb://localhost:" + port;
mgClient.connect(mgUrl, function(err, db) {
  var dbo = db.db("userDb");
  dbo.createCollection("users", function(err, res) {
        dbo.collection("users").insertMany(users, function(err, res) {

            
            // var query = { address: "Park Lane 38" };
            // dbo.collection("customers").find(query).toArray(function(err, result) {
            //     if (err) throw err;
            //     console.log(result);
            //     db.close();
            // });
            // dbo.collection("customers").deleteOne(myquery, function(err, obj) {
            //     if (err) throw err;
            //     console.log("1 document deleted");
            //     db.close();
            // });
            
        });
    });
});
*/
// ----------------------------------------------------------------------

app.listen(port, () => {
    console.log('listening on port ' + port);
})

// API router
app.use('/v1', apiRouter);

// Home page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/pages/howto.html'); //don't forget to add "types": [ "node" ] to make __dirname work on TS
})
