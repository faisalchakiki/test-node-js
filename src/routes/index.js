const express = require('express')
const routes = express.Router()

const tasksRouter = require('./taskRouter.js')

routes.use('/tasks', tasksRouter)

module.exports = routes