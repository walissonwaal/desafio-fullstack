"use client";
import { createTask } from "@/api/task"
import { useState } from "react"
import { BiPlusCircle } from "react-icons/bi"
import { format } from 'date-fns'
import toast from 'react-hot-toast';

const CreateTableLine = () => {
  const [name, setName] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const [finished, setFinished] = useState<string>('Pendente')
  const [priority, setPriority] = useState<string>('Baixa')

  const success = () => toast.success('Tafera criada com sucesso!');
  const error = () => toast.error('Preencha os campos!');

const currentDate = new Date();

const currentDateBRL = format(currentDate, 'dd/MM/yyyy');

  const handleCreateNewTask = async () => {
    try {
      const newTaskData = {
        name,
        description,
        finished,
        priority
      };

      if(name === '' && description === ''){
        error()
        return 
      }

      const createdTask = await createTask(newTaskData);

      setName("");
      setDescription("");
      setFinished('Pendente');
      setPriority("Baixa");
      success()
      
    } catch (error) {
      console.error('Erro ao criar a tarefa:', error);
    }
  };

  return (
    <tr className="hover:bg-white">
      <td className="py-4 px-6 text-sm font-medium text-black whitespace-nowrap w-[435.23px]">
        <input
          type="text"
          placeholder="Nome da tarefa"
          className="border bg-white border-zinc-300 rounded-md px-2 py-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </td>
      <td className="py-4 px-6 text-sm font-medium text-gray-500">
        <textarea
          placeholder="Digite a descrição da tarefa"
          className="border bg-white border-zinc-300 rounded-md px-2 py-2 w-80"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </td>
      <td className="py-4 px-6 text-sm font-medium text-black whitespace-nowrap text-center w-[353.91px]">
        <select
          className="border bg-white border-zinc-300 rounded-md px-2 py-2"
          value={finished}
          onChange={(e) => setFinished(e.target.value)}
        >
          <option disabled selected>
            Normal
          </option>
          <option value="Pendente">Pendente</option>
          <option value="Concluído">Concluído</option>
        </select>
      </td>
      <td className="py-4 px-6 text-sm font-medium text-black whitespace-nowrap text-center w-[371.8px]">
        <select
          className="border bg-white border-zinc-300 rounded-md px-2 py-2"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value='Baixa' disabled selected>
            Baixa
          </option>
          <option value='Alta'>Alta</option>
          <option value='Normal'>Normal</option>
          <option value='Baixa'>Baixa</option>
        </select>
      </td>
      <td className="py-4 px-6 text-sm font-medium text-black whitespace-nowrap text-center w-[479.16px]">
        {currentDateBRL}
      </td>
      <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap w-[103.93px]">
        <button
          type="button"
          className="text-success hover:text-secondary duration-300 text-2xl w-full flex justify-center"
          onClick={handleCreateNewTask}
        >
          <BiPlusCircle />
        </button>
      </td>
    </tr>
  );
};

export default CreateTableLine;
