const TaskService = require('../services/TaskService');

class TaskController {
  static async createTask(req, res) {
    try {
      const { title, description } = req.body;
      const task = await TaskService.createTask({ title, description });
      res.status(201).json(task);
    } catch (error) {
      console.log(`Erro ao criar task: ${error}`)
      res.status(500).json({ error: error.message });
    }
  }

  static async getAllTasks(req, res) {
    try {
      const tasks = await TaskService.getAllTasks();
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updateTask(req, res) {
    try {
      const { id } = req.params;
      const { title, description } = req.body;
      const task = await TaskService.updateTask(id, { title, description });
      res.status(200).json(task);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updateTaskStatus(req, res) {
    try {
      const { id } = req.params;
      const { checked } = req.body;
      const task = await TaskService.updateTaskStatus(id, checked);
      res.status(200).json(task);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteTask(req, res) {
    try {
      const { id } = req.params;
      await TaskService.deleteTask(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = TaskController;
