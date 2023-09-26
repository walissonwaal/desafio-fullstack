const task = require('../models/taskModel')


// Cria nova task
exports.createTask = async (req, res) => {
  try {
    const { name, description, finished, priority, createdAt } = req.body;
    const newTask = await task.create({ name, description, finished, priority, createdAt });
    res.status(201).json(newTask);
  } catch (err) {
    console.error("Erro ao criar tarefa: " + err.message);
    res.status(500).json({ error: "Erro ao criar tarefa" });
  }
};

// Listar todas as tasks
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await task.findAll();
    res.status(200).json(tasks);
  } catch (err) {
    console.error("Erro ao listar tarefas: " + err.message);
    res.status(500).json({ error: "Erro ao listar tarefas" });
  }
};

// Atualizar task pelo id
exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, finished, priority } = req.body;
    const currentTask = await task.findByPk(id);
    if (!currentTask) {
      res.status(404).json({ error: "Tarefa não encontrada" });
    } else {
      currentTask.name = name;
      currentTask.description = description;
      currentTask.finished = finished;
      currentTask.priority = priority || 'baixa'
      await currentTask.save();
      res.status(200).json(currentTask);
    }
  } catch (err) {
    console.error("Erro ao atualizar tarefa: " + err.message);
    res.status(500).json({ error: "Erro ao atualizar tarefa" });
  }
};

// Operação: Excluir um usuário pelo ID
exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const currentTask = await task.findByPk(id);
    if (!currentTask) {
      res.status(404).json({ error: "Tarefa não encontrada" });
    } else {
      await currentTask.destroy();
      res.status(200).json({ message: "Tarefa deletada com sucesso" });
    }
  } catch (err) {
    console.error("Erro ao deletar tarefa: " + err.message);
    res.status(500).json({ error: "Erro ao deletar tarefa" });
  }
};