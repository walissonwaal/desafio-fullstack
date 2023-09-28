import { CreateTasksTable, TasksTable } from "@/components";

const TasksPage = () => {
  return (
    <section className="p-4">
      <div className="flex flex-col">
        <div className="shadow-md">
          <div className="inline-block min-w-full align-middle">
            <div className="min-w-screen overflow-hidden flex flex-col gap-5">
              <h2 className="text-2xl mb-4">Nova tarefa</h2>
              <CreateTasksTable />
              <h2 className="text-2xl mb-4">Lista de tarefas</h2>
              <TasksTable />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TasksPage;