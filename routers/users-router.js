const usersRouter = require('express').Router()
const { getUserByUsername, getAllUsers, postNewUser } = require('../controllers/users-controller')

usersRouter.route('/').get(getAllUsers)

usersRouter.route('/').post(postNewUser)

usersRouter.route('/:username').get(getUserByUsername)


module.exports = usersRouter