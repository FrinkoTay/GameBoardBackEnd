const express = require('express')
const cors = require('cors')
const apiRouter = require('./routers/api-router')
const bodyParser = require('body-parser')

const app = express()

app.use(cors())
app.use(bodyParser.json())

//app.use(express.json())

app.use('/api', apiRouter)

module.exports = app