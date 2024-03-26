const client = require('../db/connection')
const data = require('./data/tiles')

seedTiles = () => {
    const database = client.db('gameboard')

    database.collection("tiles").drop(function(err, success) {
        if (err) throw err;
        if (success) console.log("Collection deleted");
    });

    const tiles = database.collection('tiles')

    console.log('before seeding')
    return tiles.insertMany(data)
    .then(() => {
        console.log("tiles collection seeded")
        //database.close()
    })
}

seedTiles()