const { nanoid } = require("nanoid")
const dataTasks = require('../data/index.js');

const getTask = (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Success Get Task",
    results: dataTasks,
  });
}

const createTask = async (req, res) => {
  try {
    const { title, completed } = req.body;
    const id = nanoid()
    const newTask = {
      "id": id,
      "title": title,
      "completed": Boolean(completed) || false
    };

    dataTasks.push(newTask)

    const isSuccess = dataTasks.filter((task) => task.id === id).length > 0;
    if (isSuccess) {
      return res.status(200).json({
        success: true,
        message: "Success Create Task",
        results: newTask,
      });
    } else {
      throw new Error('Internal Server Error');
    }
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};



module.exports = { createTask, getTask }