const { MongoClient } = require("mongodb")
const { username, password } = require("../hidden/dbURI")

const dbURI = `mongodb+srv://${username}:${password}@tiledb.quwskmg.mongodb.net/?retryWrites=true&w=majority&appName=TileDB`

const client = new MongoClient(dbURI)

module.exports = client