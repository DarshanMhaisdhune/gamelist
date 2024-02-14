import React from 'react';
import Header from './Componets/Header';
import Body from './Componets/Body';
import SidebarProvider from './Context/SideContext';


function App() {
  return (
    <SidebarProvider>
    <div className="App">
     <Header/>
     <Body/>
    </div>
    </SidebarProvider>
  );
}

export default App;
