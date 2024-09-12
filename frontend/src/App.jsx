import React from 'react';
import { BrowserRouter as Router ,Routes, Route} from 'react-router-dom';
import {Directory} from './Pages/Directory' 

import { Button, Navbar } from '@material-tailwind/react';
import {ComplexNavbar} from './Components/Navbar';
import GalleryIcon from './Components/Text';
import Video_f1 from './Components/Video_f1';
import { Services_cards } from './Components/Services_cards';
import Services from './Pages/Services';
// import {MyMapComponent} from './Components/Maps'
import { Careers } from './Components/Careers';
import Career2 from './Pages/Career2'
import Gallery from './Pages/Gallery';

function App() {
  return (
    <>
    <ComplexNavbar/>
    <div>
      
      <Routes>
        <Route path="/" element={<Video_f1 />} />
        <Route path="/Directory" element={<Directory />} />
        <Route path="/Career" element={<Career2 />} />
        <Route path="/Services" element={<Services/>} />
        <Route path="/Gallery" element={<Gallery/>} />
      </Routes>
       
    </div>



        {/* <ComplexNavbar/> */}
      {/* <GalleryIcon/> */}
        {/* <Video_f1/> */}
        {/* <MyMapComponent/> */}
        {/* <Services_cards/> */}


        {/* <Career2/> */}

        {/* <Services/> */}
      
    </>
  );
}

export default App;  