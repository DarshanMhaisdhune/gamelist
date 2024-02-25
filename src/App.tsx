import {  createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from './Utils/Store';
import Home from './Componets/Home';
import SidebarProvider from './Context/SideContext';
import { lazy, Suspense } from 'react';
const Details =  lazy(()=> import('./Componets/DetailsPage/Details'))


function App() {  

 
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/details',
      element: (
        <Suspense fallback={<div className='flex items-center justify-center h-screen text-5xl '>Loading...</div>}>
            <Details />
          </Suspense>
      )
    }
  ]);

  return (
    <Provider store={appStore}>
     <SidebarProvider>
     <RouterProvider router={appRouter} />
      </SidebarProvider>
    </Provider>
  );
}


export default App;
