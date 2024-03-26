const client = require('../db/connection')
const data = require('./data/tiles')

seedTiles = () => {
    const database = client.db('gameboard')
    const tiles = database.collection('tiles')

    console.log('before seeding')
    return tiles.insertMany(data)
    .then(() => {
        console.log("tiles collection seeded")
    })
}

seedTiles()