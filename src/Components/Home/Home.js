





import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Yatri from '../Middlepage1/Yatri';
import Outstation from '../Forms/OutStation/OutStation';
import Local from '../Forms/Local/Local';
import Airport from '../Forms/Airport/airport';
import Navbar from '../navbar/Navbar';
import Discovery from '../BottomContent/Discovery';
import Facilities from '../Middlepage2/Facilities';
import Footer from '../Footer/Footer'


function Home() {
  return(
    <>
  <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route exact path="/" element={<Outstation/>} />
        <Route path="/outstation" element={<Outstation/>} />
        <Route path="/local" element={<Local/>} />
        <Route path="/airport" element={<Airport/>} />
      </Routes>
     
    </BrowserRouter>
     <Yatri/>
     <Facilities/>
     <Discovery/>
     <Footer/>
    
     </>
  );
}
export default Home;
