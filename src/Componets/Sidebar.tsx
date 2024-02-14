import React from 'react'
import { useSidebar } from '../Context/SideContext';

const Sidebar: React.FC = () => {

    const {isSidebarOpen} = useSidebar();
  return (
    <div className='flex'>
        <aside className={`bg-blue-500 h-screen text-white w-1/5 lg:block ${isSidebarOpen ? 'block' : 'hidden'}`}>
        <ul>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
        </ul>
      </aside>

    </div>
  )
}

export default Sidebar;