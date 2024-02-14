import React, { createContext, useContext, useState } from 'react';


interface sideContextType{
    isSidebarOpen: boolean;
    toggleSidebar:()=> void ;
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

  const toggleSidebar = () => {
    setIsSidebarOpen((prev)=> !prev);
  };

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
