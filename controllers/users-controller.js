const { selectUserByUsername } = require('../models/users-model')

exports.getUserByUsername = (req, res, next) => {
    const userName = req.params.username
    selectUserByUsername(userName)
    .then((user) => {
        res.status(200).send(user)
    })
}