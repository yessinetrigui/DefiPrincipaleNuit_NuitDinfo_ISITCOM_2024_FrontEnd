import React from 'react';
import Home from './pages/Home/Home';
import Admin from './pages/Admin/Admin';
import { Footer } from "flowbite-react"; // Import Home component

import { BrowserRouter, Route ,Routes } from 'react-router-dom';
import Client from './client';


const App = () => {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/*' element={<Client/>}></Route>
      <Route path='/admin' element={<Admin/>}></Route>
      
     </Routes>
       
      </BrowserRouter>
   
  );
};

export default App;
