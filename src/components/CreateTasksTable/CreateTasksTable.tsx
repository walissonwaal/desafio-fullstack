import { TableHead, CreateTableBody } from '@/components';

const CreateTasksTable = () => {
  return (
    <div className="table-container">
      <table className="min-w-screen w-full table-auto divide-y divide-gray-200">
        <TableHead />
        <CreateTableBody />
      </table>
    </div>
  );
};

export default CreateTasksTable;
