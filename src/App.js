import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from 'react-router-dom'; 

import {appRouter} from './MyApp.js';

function App()
{
  return (
    <div>
        <RouterProvider router={appRouter} /> 
    </div>
  );
}

export default App;
