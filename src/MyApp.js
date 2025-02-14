import React from 'react';
import {createBrowserRouter,Outlet} from 'react-router-dom';


import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Body from './components/Body.js';
import Language from './components/Language.js';

function MyApp()
{
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export const appRouter = createBrowserRouter([
                    {
                        path: '/',
                        element: <MyApp/>,
                        children: [
                          {
                            path: '/',
                            element: <Body/>
                          },
                          {
                            path: '/about',
                            element: <About/>
                          },
                          {
                            path: '/contact',
                            element: <Contact/>
                          },
                          {
                            path:'/language',
                            element: <Language/>
                          }
                        ]
                    }]);
