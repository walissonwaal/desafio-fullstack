'use client';
import { getTasks } from '@/api/task';
import { TableLine } from '@/components';
import { useEffect, useState } from 'react';

interface Task {
  id: number;
  name: string;
  description: string;
  finished: string;
  priority: string;
  createdAt: Date;
}

const orderByPriority = (tasks: Task[]) => {
  return tasks.sort((a, b) => {
    const priorities = ['Alta', 'Normal', 'Baixa'];
    return priorities.indexOf(a.priority) - priorities.indexOf(b.priority);
  });
};

const TableBody = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    async function fetchTasks() {
      try {
        const tasksData = await getTasks();
        const tasksOrdenadas = orderByPriority(tasksData);
        setTasks(tasksOrdenadas);
      } catch (error) {
        console.error('Erro ao buscar tarefas:', error);
      }
    }

    fetchTasks();
  }, [tasks]);

  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {tasks.map((task) => (
        <TableLine
          key={task.id}
          name={task.name}
          createdAt={task.createdAt}
          description={task.description}
          finished={task.finished}
          id={task.id}
          priority={task.priority}
        />
      ))}
    </tbody>
  );
};

export default TableBody;
