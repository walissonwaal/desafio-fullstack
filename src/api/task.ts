import toast from "react-hot-toast";

interface Task {
  name: string;
  description: string;
  finished: string;
  priority: string;
}

const baseURL = 'http://localhost:3001/api'

const success = () => toast.success('Tafera excluída com sucesso!');

export const getTasks = async () => {
  try {
    const response = await fetch(`${baseURL}/tasks`);
    if (!response.ok) {
      throw new Error('Não foi possível obter as tarefas');
    }
    const tasksData = await response.json();
    return tasksData;
  } catch (error) {
    throw error;
  }
};

export const createTask = async (newTaskData: Task) => {
  try {
    const response = await fetch(`${baseURL}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTaskData),
    });

    if (!response.ok) {
      throw new Error('Não foi possível criar uma nova tarefa');
    } else {
      console.log('Tarefa criada com sucesso!')
    }

    const createdTask: Task = await response.json();
    return createdTask;
  } catch (error) {
    throw error;
  }
};

export const deleteTask = async (taskId: number) => {
  try {
    const response = await fetch(
      `${baseURL}/tasks/${taskId}}`,
      {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (response.ok) {
      success()
      console.log('Tarefa deletada com sucesso.')
    } else {
      const responseData = await response.json();
      console.error("Erro ao excluir tarefa", responseData);
      alert(`Erro ao excluir tarefa ${responseData.error}`);
    }
  } catch (error) {
    console.error("Erro ao excluir Tarefa", error);
    alert("Erro ao excluir tarefa. Verifique o console para detalhes.");
  }
};