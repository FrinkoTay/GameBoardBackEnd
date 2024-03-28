const { MongoClient } = require("mongodb")
const ENV = process.env.NODE_ENV || 'development'

require('dotenv').config({
    path: `${__dirname}/../.env-files/.env.${ENV}`
})

const dbURI = process.env.DATABASE_URL

const client = new MongoClient(dbURI)

module.exports = client