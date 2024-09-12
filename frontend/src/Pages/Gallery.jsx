import React from 'react'
import Gallary from '../Assets/Gallary_image.jpg'


export default function Gallery() {
  let arr=[]
  for(let i=0;i<6;i++)
  {
    arr.push(
    
    <img src={Gallary} width={'90%'}/>
   
    )

  }
  



  
  
  return (<>
    <div>
      {/* hello */}
      <img src={Gallary} width='100%'/>
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',justifyItems: 'center',alignItems: 'center',marginTop:'3%'  }}>
        {arr}
        {/* <div style={{height:'1%'}}></div> */}
      </div>




  </>)
}
