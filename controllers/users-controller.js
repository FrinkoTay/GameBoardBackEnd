const { selectUserByUsername, readAllUsers } = require('../models/users-model')

exports.getUserByUsername = (req, res, next) => {

    const userName = req.params.username
    selectUserByUsername(userName)
    .then((user) => {
        res.status(200).send(user)
    })
}

exports.getAllUsers = (req, res, next) => {
    readAllUsers()
    .then((result) => {
        res.status(200).send(result)
    })
}



