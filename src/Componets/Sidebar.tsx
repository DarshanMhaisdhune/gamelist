import React from 'react'
import { useSidebar } from '../Context/SideContext';
import { useSelector } from 'react-redux';
import { RootState } from '../Utils/Store';

interface genrelistType{
  id: number;
  name: string;
  image_background: string;
}

const Sidebar: React.FC = () => {

    const {isSidebarOpen ,setGenreName, setGenreId} = useSidebar();
    const handleGenreClick =(name:string, id:number)=>{
      setGenreName(name);
      setGenreId(id);
    }
    const genreList = useSelector((store:RootState)=> store.genre ?? []) as genrelistType[];
    if(genreList === undefined) return null ;
  return (
    <div className='flex mt-14 md:mt-20 w-full h-screen'>
        <aside className={`bg-orange dark:bg-gray-900 pb-2  text-darkblue dark:text-powerblue overflow-y-auto no-scrollbar md:block ${isSidebarOpen ? 'block' : 'hidden'}`}>
        <h2 className='text-xl sm:text-2xl lg:text-3xl font-semibold xl:font-bold font-serif text-center my-2 text-blue-800 dark:text-slate-300'>Genre</h2>
        <div>
          {
            genreList.map((item:genrelistType)=>(
              <div  key={item.id}
               onClick={()=>handleGenreClick(item.name, item.id)}
                className='flex group sidebar-item items-center gap-1 sm:gap-3 xl:gap-3 m-[2px] xl:m-1 p-[2px] sm:p-[3px] xl:p-2 hover:bg-slate-400 rounded-lg' >
                <img src={item.image_background} alt="Img" className='w-7 sm:w-9 lg:w-12 xl:w-14 h-7 sm:h-9 lg:h-12 xl:h-14 object-cover rounded-lg item-image transition duration-300 ease-in-out transform group-hover:scale-105' />
                <h3 className='text-xs sm:text-sm lg:text-lg xl:text-xl font-medium item-text transition duration-300 ease-in-out  group-hover:font-bold'>{item.name}</h3>
              </div>

            ))
          }
        </div>
      </aside>

    </div>
  )
}

export default Sidebar;