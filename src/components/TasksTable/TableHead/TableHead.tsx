const TableHead = () => {
  return (
    <thead className="bg-base-200">
      <tr>
        <th
          scope="col"
          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase"
        >
          Tarefa
        </th>
        <th
          scope="col"
          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase w-96"
        >
          Descrição
        </th>
        <th
          scope="col"
          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase"
        >
          Realizado
        </th>
        <th
          scope="col"
          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase"
        >
          Prioridade
        </th>
        <th
          scope="col"
          className="py-3 px-6 text-xs font-medium tracking-wider text-center text-white uppercase"
        >
          Data de criação
        </th>
        <th
          scope="col"
          className="py-3 px-6 text-xs font-medium tracking-wider text-center text-white uppercase"
        >
          Ações
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;
