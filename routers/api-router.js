const apiRouter = require('express').Router()
const tilesRouter = require('./tiles-router')

apiRouter.use('/tiles', tilesRouter)

module.exports = apiRouter