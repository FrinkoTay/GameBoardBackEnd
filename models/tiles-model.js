const client = require('../db/connection')

exports.selectTileByType = (tileType) => {
    const database = client.db('gameboard')
    const tiles = database.collection('tiles')

    const query = {tile_type: tileType}
    return tiles.findOne(query)
}