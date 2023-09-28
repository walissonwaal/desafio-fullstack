import { TableHead, TableBody } from '@/components'

const TasksTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 table-fixed">
        <TableHead />
        <TableBody />
      </table>
    </div>
  );
}

export default TasksTable;