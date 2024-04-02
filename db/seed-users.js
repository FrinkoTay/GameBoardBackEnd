const client = require('./connection')
const userData = require('./data/users')

seedUsers = () => {
    const database = client.db('gameboard')

    database.collection("users").drop(function(err, success) {
        if (err) throw err;
        if (success) console.log("Collection deleted");
    });

    const users = database.collection('users')

    console.log('before seeding')
    return users.insertMany(userData)
    .then(() => {
        console.log("users collection seeded")
        //database.close()
    })
}

seedUsers()