import React from 'react';
import Header from './Componets/Header';
import Body from './Componets/Body';
import SidebarProvider from './Context/SideContext';
import { Provider } from 'react-redux';
import appStore from './Utils/Store';


function App() {
  return (
    <Provider store={appStore}>
    <SidebarProvider>
    <div className="App">
     <Header/>
     <Body/>
    </div>
    </SidebarProvider>
    </Provider>
  );
}

export default App;
