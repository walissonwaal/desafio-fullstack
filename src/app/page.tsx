import Link from "next/link";

export default function Home() {

  return (
    <>
      <div className="w-full flex flex-col gap-10 justify-center items-center">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl md:text-5xl font-bold text-base-200">Bem vindo ao To-Do-List</h2>
          <p className="text-center text-xl md:text-2xl font-light text-base-200">Controle suas tarefas de forma simples e direta</p>
        </div>
        <Link href="/pages/tasks" className="bg-info px-6 py-2 rounded-md text-white font-bold hover:bg-sky-700 duration-300">
          Começar
        </Link>
      </div>

    </>
  )
}
