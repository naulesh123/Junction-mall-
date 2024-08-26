import React from 'react';
import { Button, Navbar } from '@material-tailwind/react';
import {ComplexNavbar} from './Components/Navbar';
import GalleryIcon from './Components/Text';
import Video_f1 from './Components/Video_f1';
import { Services_cards } from './Components/Services_cards';
import Services from './Pages/Services';
// import {MyMapComponent} from './Components/Maps'
import { Careers } from './Components/Careers';
import Career2 from './Pages/Career2'

function App() {
  return (
    <>
        <ComplexNavbar/>
      {/* <GalleryIcon/> */}
        {/* <Video_f1/> */}
        {/* <MyMapComponent/> */}
        {/* <Services_cards/> */}


        <Career2/>

        {/* <Services/> */}
      
    </>
  );
}

export default App;  