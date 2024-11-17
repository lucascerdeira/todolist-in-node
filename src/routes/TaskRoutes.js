const express = require('express');
const TaskController = require('../controllers/TaskController');

const router = express.Router();

router.post('/tasks', TaskController.createTask);
router.get('/tasks', TaskController.getAllTasks);
router.patch('/tasks/:id', TaskController.updateTask);
router.patch('/tasks/:id/status', TaskController.updateTaskStatus);
router.delete('/tasks/:id', TaskController.deleteTask);

module.exports = router;
