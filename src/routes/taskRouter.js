const express = require('express')
const tasksRouter = express.Router()

const { createTask, getTask } = require('../controller/taskController')

tasksRouter.get('/', getTask)
tasksRouter.post('/', createTask)

module.exports = tasksRouter;
