const fs = require('fs'); 

let jsonPath = 'users.json';
let data = fs.readFileSync(jsonPath);
let users = JSON.parse(data);

function GetUsers()
{
    return users;
}

function GetUser(id)
{
    return users.find( (user) => user._id === id )
}

function AddUser(user)
{
    users.push(user);

    var newUsers = JSON.stringify(users);
    fs.writeFile(jsonPath, newUsers, (err) => { if (err) throw err;} )
    return user;
}

function DeleteUser(id)
{
    for (let i = 0; i < users.length; i++)
    {
        if (users[i]._id == id)
        {
            users.splice(i,1);
            break;
        }
    }
    
    var newUsers = JSON.stringify(users);
    fs.writeFile(jsonPath, newUsers, (err) => { if (err) throw err; })
    return users;
}

module.exports = {
    GetUser,
    GetUsers,
    AddUser,
    DeleteUser
}