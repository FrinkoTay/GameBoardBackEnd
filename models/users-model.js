const client = require('../db/connection')

exports.selectUserByUsername = (userName) => {
    const database = client.db('gameboard')
    const users = database.collection('users')
    const query = {username: userName}
    return users.findOne(query)
}

exports.readAllUsers = () => {
    const database = client.db('gameboard')
    const users = database.collection('users')
    const results = users.find({}).toArray()
    return results
}


