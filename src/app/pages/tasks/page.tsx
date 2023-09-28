import { CreateTasksTable, TasksTable } from "@/components";

const TasksPage = () => {
  return (
    <section className="py-4 md:p-4">
      <div className="flex flex-col">
        <div className="shadow-md">
          <div className="min-w-full align-middle overflow-x-auto">
            <div className="min-w-screen overflow-hidden flex flex-col gap-5">
              <h2 className="text-2xl text-base-200 mb-4 text-center md:text-start">Nova tarefa</h2>
              <CreateTasksTable />
              <h2 className="text-2xl text-base-200 mb-4 text-center md:text-start">Lista de tarefas</h2>
              <TasksTable />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TasksPage;