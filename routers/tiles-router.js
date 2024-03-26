const tilesRouter = require('express').Router()
const { getTileByType } = require('../controllers/tiles-controller')

tilesRouter
    .route('/:tile_type')
    .get(getTileByType)
    

module.exports = tilesRouter