"use client"
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from "next/navigation";

const Header = () => {
  const [isActive, setIsActive] = useState<boolean>(false)

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
    // <header className="w-full bg-base-200 text-white h-10 md:h-20 shadow-md flex items-center justify-between md:justify-start px-10">
    //   <h1 className="text-lg md:text-2xl font-bold">To-Do-List</h1>
    //   <div onClick={() => setIsActive(!isActive)}>
    //     <RxHamburgerMenu />
    //   </div>
    // </header>

    <header className="navbar bg-base-200">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-20">
            <button className={`${activeItem === 'home' ? 'text-info' : ''} mb-2`} onClick={handleHome}>Home</button>
            <button className={`${activeItem === 'tasks' ? 'text-info' : ''}`} onClick={handleTasks}>Tarefas</button>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <button onClick={handleHome} className="btn btn-ghost normal-case text-xl">To-Do-List</button>
      </div>
      <div className="navbar-end">
      </div>
    </header>
  );
}

export default Header;