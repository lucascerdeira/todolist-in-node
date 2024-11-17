class Task {
    constructor(id, title, description, checked, createdAt, updatedAt) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.checked = checked;
      this.createdAt = createdAt;
      this.updatedAt = updatedAt;
    }
  }
  
  module.exports = Task;
  