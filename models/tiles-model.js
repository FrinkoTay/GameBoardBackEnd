const client = require('../db/connection')

exports.selectTileByType = (tileType) => {
    const database = client.db('gameboard')
    const movies = database.collection('tiles')

    const query = {tile_type: tileType}
    return movies.findOne(query)
}