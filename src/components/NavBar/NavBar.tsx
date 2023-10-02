"use client"
import { useEffect, useState } from "react";
import { AiOutlineHome } from 'react-icons/ai'
import { BiTask } from 'react-icons/bi'
import { useRouter, usePathname } from "next/navigation";

const NavBar = () => {
  const [activeItem, setActiveItem] = useState<string>('home');
  const router = useRouter();

  const handleHome = () => {
    router.push('/');
    setActiveItem('home');
  }

  const handleTasks = () => {
    router.push('/pages/tasks');
    setActiveItem('tasks');
  }
  const pathname = usePathname()

  useEffect(() => {
    if (pathname === '/pages/tasks') {
      setActiveItem('tasks');
    }

  }, [pathname])

  return (
    <>
      <nav className="hidden md:flex bg-base-200 md:w-60 shadow-md">
        <div className="flex flex-col gap-5 text-xl p-6 text-white font-bold">
          <div className={`flex items-center gap-2 hover:text-info duration-300 ${activeItem === 'home' ? 'text-info' : ''}`}>
            <AiOutlineHome />
            <button onClick={handleHome}>Home</button>
          </div>
          <div className={`flex items-center gap-2 hover:text-info duration-300 ${activeItem === 'tasks' ? 'text-info' : ''}`}>
            <BiTask />
            <button onClick={handleTasks}>Tarefas</button>
          </div>
        </div>
      </nav>
      </>
  );
}

export default NavBar;
