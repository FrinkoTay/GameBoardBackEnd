const { selectTileByType } = require('../models/tiles-model')

exports.getTileByType = (req, res, next) => {
    const tileType = req.params.tile_type
    selectTileByType(tileType)
    .then((tile) => {
        res.status(200).send(tile)
    })
}