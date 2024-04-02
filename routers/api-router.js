const apiRouter = require('express').Router()
const tilesRouter = require('./tiles-router')
const usersRouter = require('./users-router')



apiRouter.use('/tiles', tilesRouter)

apiRouter.use('/users', usersRouter)

module.exports = apiRouter