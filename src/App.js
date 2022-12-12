
import './App.css';

import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes';



function App() {
  return (
    <div className=' mx-auto'>
      {/* <h1 className='text-5xl bg-orange-400'>My Portfolio</h1> */}
      <RouterProvider router={routes}></RouterProvider>
     
      
      <Toaster/>
    </div>
  );
}

export default App;
