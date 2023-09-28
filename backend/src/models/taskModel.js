const { DataTypes } = require('sequelize');
const sequelize = require('../services/sequelize');

const Task = sequelize.define('Task', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  finished: {
    type: DataTypes.STRING,
    defaultValue: 'Pendente',
    allowNull: false,
  },
  priority: {
    type: DataTypes.TEXT,
    defaultValue: 'baixa',
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
  
});

module.exports = Task;
