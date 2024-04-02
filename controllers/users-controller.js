const { selectUserByUsername, readAllUsers, addNewUser } = require('../models/users-model')

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

exports.postNewUser = (req, res, next) => {
    const newUser = req.body
    addNewUser(newUser)
    .then((result) => {
        res.status(201).send(result)
    })
}



