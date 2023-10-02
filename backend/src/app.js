require('dotenv').config();
const express = require('express');
const app = express();
const sequelize = require('./services/sequelize');

const bodyParser = require('body-parser');
const cors = require('cors');

const taskRoute = require('./routes/taskRoute');

const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());

// Rota tasks
app.use('/api/tasks', taskRoute);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log('Models sincronizados');
    app.listen(PORT, () => {
      console.log(`Servidor ouvindo na porta ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Erro ao sincronizar models com db: ' + err.message);
  });
