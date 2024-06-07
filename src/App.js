import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Outstation from './Components/Forms/OutStation/OutStation';
import Local from './Components/Forms/Local/Local';
import Airport from './Components/Forms/Airport/airport';
import Navbar from './Components/navbar/Navbar';

function App() {
  return (
     /*<BrowserRouter>
     <Navbar/>
       <Routes>
         <Route exact path="/" element={<Home/>} />
         <Route path="/outstation" element={<Outstation/>} />
         <Route path="/local" element={<Local/>} />
         <Route path="/airport" element={<Airport/>} />
       </Routes>
     </BrowserRouter>*/
     <Home/>
  );
}

export default App;
