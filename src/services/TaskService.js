const { PrismaClient } = require('@prisma/client'); 
const prisma = new PrismaClient(); 

class TaskService {
  static async createTask({ title, description }) {
    
    if (!title) {
      throw new Error('O campo titulo é obrigatório.');
    }

    try {
      return await prisma.tasks.create({
        data: {
          title,
          description,
          checked: false 
        }
      });
    } catch (error) {
      console.error('Erro ao criar task:', error);
      throw new Error('Erro ao criar task');
    }
  }

  static async getAllTasks() {
    return prisma.tasks.findMany();
  }

  static async updateTask(id, data) {
    return prisma.tasks.update({
      where: { id },
      data,
    });
  }

  static async updateTaskStatus(id, checked) {
    return prisma.tasks.update({
      where: { id },
      data: { checked },
    });
  }

  static async deleteTask(id) {
    return prisma.tasks.delete({ where: { id } });
  }
}

module.exports = TaskService;
