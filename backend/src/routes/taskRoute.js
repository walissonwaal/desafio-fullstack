const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController')

// Rota para criar uma nova task
router.post('/', taskController.createTask);

// Rota para listar todas os tasks
router.get('/', taskController.getAllTasks);

// Rota para atualizar uma task pelo id
router.put('/:id', taskController.updateTask);

// Rota para excluir uma task pelo id
router.delete('/:id', taskController.deleteTask);



module.exports = router;
