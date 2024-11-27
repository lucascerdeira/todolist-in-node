const TaskService = require('../services/TaskService');

class TaskController {
  static async createTask(req, res) {
    try {
      const { title, description } = req.body;
      if (!title) {
         return res.status(400).json({ error: 'O campo titulo é obrigatório!'});
      }

      const task = await TaskService.createTask({ title, description });
      return res.status(201).json(task);
      
    } catch (error) {
      console.log(`Erro ao criar task: ${error}`)
      return res.status(500).json({ error: error.message });
    }
  }

  static async getAllTasks(req, res) {
    try {
      const tasks = await TaskService.getAllTasks();
      return res.status(200).json(tasks);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async updateTask(req, res) {
    try {
      const { id } = req.params;
      const { title, description } = req.body;
      const task = await TaskService.updateTask(id, { title, description });
     return  res.status(200).json(task);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async updateTaskStatus(req, res) {
    try {
      const { id } = req.params;
      const { checked } = req.body;
      const task = await TaskService.updateTaskStatus(id, checked);
      return res.status(200).json(task);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async deleteTask(req, res) {
    try {
      const { id } = req.params;
      await TaskService.deleteTask(id);
      return res.status(200).send();
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = TaskController;
