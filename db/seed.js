const client = require('../db/connection')
const tileData = require('./data/tiles')
const userData = require('./data/users')

seedTiles = () => {
    const database = client.db('gameboard')

    database.collection("tiles").drop(function(err, success) {
        if (err) throw err;
        if (success) console.log("Collection deleted");
    });

    const tiles = database.collection('tiles')

    console.log('before seeding')
    return tiles.insertMany(tileData)
    .then(() => {
        console.log("tiles collection seeded")
        //database.close()
    })
}

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

seedTiles()
seedUsers()