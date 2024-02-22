import React, { createContext, useContext, useState } from 'react';


interface sideContextType{
    isSidebarOpen: boolean;
    toggleSidebar:()=> void ;
    genreId: number | null;
    setGenreId: React.Dispatch<React.SetStateAction<number | null>> ;
    genreName : string | null ;
    setGenreName: React.Dispatch<React.SetStateAction<string | null>> ;
}

const SidebarContext = createContext<sideContextType | undefined >(undefined);

export const useSidebar=()=>{
    const context = useContext(SidebarContext);
    if(!context){
        throw new Error('useSidebar must be used in sidebarProvider');
    }
    return context ;
}

interface sidebarProviderProps{
    children:React.ReactNode ;
}
const SidebarProvider: React.FC<sidebarProviderProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const[genreName, setGenreName ] = useState<string | null>('Action');
  const[genreId, setGenreId] = useState<number | null>(4);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev)=> !prev);
  };

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar, genreName, setGenreName, genreId, setGenreId }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
