# Desafio Fullstack

#### Em produção: https://desafio-fullstack-kr39z86kb-walissonwaal.vercel.app/

# Sobre o projeto

Projeto de desafio desenvolvido para processo seletivo da Simplify.

A aplicação consiste em um To-Do-List (Lista de tarefas), onde o usuário pode criar, listar, alterar e deletar tarefas. As tarefas criadas são persistidas no banco de dados MySQL, em uma tabela chamada tasks.

O usuário também pode definir níveis de prioridade, como: baixa, normal e alta. As tarefas são listadas de acordo com o nível de prioridade.

# Tecnologias utilizadas
## Back end
- NodeJS
- Express
- Sequelize
- Body Parser
- Cors
- MySQL2
## Front end
- NextJS / TypeScript
- TailwindCSS
## Banco de dados
- MySQL
## Deploy
- Google Cloud
- Vercel

# Como executar o projeto

## Back end
Pré-requisitos: Node -v 18.18.0

```bash
# clonar repositório
git clone [LINK](https://github.com/walissonwaal/desafio-fullstack.git)

# entrar na pasta do projeto backend
cd backend

# instalar dependências
npm install
// ou
yarn install

# definir variáveis de ambiente conforme exemplo (.env.exemple)

# executar o projeto
npm start
```

## Front end web
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone [LINK](https://github.com/walissonwaal/desafio-fullstack.git)

# instalar dependências
npm install
// ou
yarn install

# executar o projeto
npm run dev
```

## Banco de dados
Pré-requisitos: MySQL

```bash
# criar banco de dados todo_db
CREATE DATABASE todo_db;

```

# Autor

Walisson Gomes da Silva
