
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/routes';
import { useEffect } from 'react';
import Aos from 'aos';

import 'aos/dist/aos.css';

function App() {

  // aos library
  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <div className="max-w-[1440px] mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
