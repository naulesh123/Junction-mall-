import React from 'react';
import { Button, Navbar } from '@material-tailwind/react';
import {ComplexNavbar} from './Components/Navbar';
import GalleryIcon from './Components/Text';
import Video_f1 from './Components/Video_f1';



function App() {
  return (
    <>
        <ComplexNavbar/>
      {/* <GalleryIcon/> */}
        <Video_f1/>
      
    </>
  );
}

export default App;