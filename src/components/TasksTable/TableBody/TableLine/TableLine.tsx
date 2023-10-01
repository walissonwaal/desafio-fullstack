'use client';
import { deleteTask } from '@/api/task';
import { useState } from 'react';
import toast from 'react-hot-toast';

interface TableLineProps {
  id: number;
  name: string;
  description: string;
  finished: string;
  priority: string;
  createdAt: Date;
}

const TableLine = (props: TableLineProps) => {
  const [isUpdate, setIsUpdate] = useState<boolean>(false);

  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [finished, setFinished] = useState<string>('Pendente');
  const [priority, setPriority] = useState<string>('Baixa');

  const success = () => toast.success('Tafera alterada com sucesso!');
  const error = () => toast.error('Altere ao menos um campo.');

  // formata data
  function dateConversion(dateString: any) {
    const date = new Date(dateString);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  const dateFormated = dateConversion(props.createdAt);

  const dataUpdated = {
    name: name || props.name,
    description: description || props.description,
    finished: finished || props.finished,
    priority: priority || props.priority,
  };

  const baseURL = 'http://localhost:3001/api';

  const updateTask = async (taskId: number, dataUpdated: any) => {
    try {
      const response = await fetch(`${baseURL}/tasks/${taskId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataUpdated),
      });

      if (response.ok) {
        success();
        setIsUpdate(!isUpdate);
        console.log('Tarefa alterada com sucesso!');
      } else {
        const responseData = await response.json();
        console.error('Erro ao atualizar tarefa:', responseData);
        alert(`Erro ao atualizar tarefa: ${responseData.error}`);
      }
    } catch (error) {
      console.error('Erro ao atualizar tarefa:', error);
      alert('Erro ao atualizar tarefa. Verifique o console para detalhes.');
    }
  };

  return (
    <tr key={props.id} className="hover:bg-white">
      {!isUpdate ? (
        <td className="py-4 px-6 text-sm font-medium text-black whitespace-nowrap w-60">
          {props.name}
        </td>
      ) : (
        <td className="py-4 px-6 text-sm font-medium text-black whitespace-nowrap w-60">
          <input
            type="text"
            placeholder={props.name}
            className="border bg-white border-zinc-300 rounded-md px-2 py-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </td>
      )}
      {!isUpdate ? (
        <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-pre-line">
          {props.description}
        </td>
      ) : (
        <td className="py-4 px-6 text-sm font-medium text-gray-500">
          <textarea
            placeholder={props.description}
            className="border bg-white border-zinc-300 rounded-md px-2 py-2 w-80"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </td>
      )}
      {!isUpdate ? (
        <td className="py-4 px-6 text-sm font-medium text-black whitespace-nowrap text-center">
          {props.finished}
        </td>
      ) : (
        <td className="py-4 px-6 text-sm font-medium text-black whitespace-nowrap text-center">
          <select
            className="border bg-white border-zinc-300 rounded-md px-2 py-2"
            value={finished}
            onChange={(e) => setFinished(e.target.value)}
          >
            <option disabled selected>
              {props.finished}
            </option>
            <option value="Pendente">Pendente</option>
            <option value="Concluído">Concluído</option>
          </select>
        </td>
      )}
      {!isUpdate ? (
        <td className="py-4 px-6 text-sm font-medium text-black whitespace-nowrap text-center">
          {props.priority}
        </td>
      ) : (
        <td className="py-4 px-6 text-sm font-medium text-black whitespace-nowrap text-center w-[371.8px]">
          <select
            className="border bg-white border-zinc-300 rounded-md px-2 py-2"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="Baixa" disabled selected>
              {props.priority}
            </option>
            <option value="Alta">Alta</option>
            <option value="Normal">Normal</option>
            <option value="Baixa">Baixa</option>
          </select>
        </td>
      )}
      <td className="py-4 px-6 text-sm font-medium text-black whitespace-nowrap text-center">
        {dateFormated}
      </td>
      {isUpdate ? (
        <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap w-20">
          <div className="flex gap-2">
            <button
              type="button"
              className="text-blue-600 dark:text-blue-500 hover:underline"
              onClick={() => updateTask(props.id, dataUpdated)}
            >
              Salvar
            </button>
            <button
              onClick={() => deleteTask(props.id)}
              type="button"
              className="text-blue-600 dark:text-blue-500 hover:underline"
            >
              Excluir
            </button>
          </div>
        </td>
      ) : (
        <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap w-20">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setIsUpdate(!isUpdate)}
              className="text-primary  hover:underline"
            >
              Editar
            </button>
            <button
              onClick={() => deleteTask(props.id)}
              type="button"
              className="text-primary hover:underline"
            >
              Excluir
            </button>
          </div>
        </td>
      )}
    </tr>
  );
};

export default TableLine;
