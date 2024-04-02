const client = require('./connection')
const tileData = require('./data/tiles')


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



seedTiles()
