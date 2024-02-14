import React from 'react'
import Logo from "../Assets/Images/logo1.png";
import { FiSearch } from "react-icons/fi";
import DarkMode from './DarkMode';
import { GiHamburgerMenu } from "react-icons/gi";
import { useSidebar } from '../Context/SideContext';

const Header: React.FC = () => {

   const {toggleSidebar} = useSidebar();
  return (
    <div className='flex w-full bg-green dark:bg-gray-700 justify-between items-center'>
        <div className='flex items-center'>
            <GiHamburgerMenu className='block lg:hidden text-3xl' onClick={toggleSidebar}  />
            <img src={Logo} alt="Game" width={80} height={80} />
        </div>
        <div className='flex'>
            <input className=' w-36 h-9   sm:w-48 md:w-64 lg:w-[37rem] xl:w-[40rem] xl:h-12 outline-none p-2 rounded-l-full' type="text" placeholder='Search' />
            <FiSearch className='w-7 h-9  xl:h-12  bg-white rounded-r-full text-xl text-gray-500 pr-2 '/>
        </div>
        <div className='flex  mx-4'>
            <DarkMode/>
        </div>
    </div>
  )
}

export default Header