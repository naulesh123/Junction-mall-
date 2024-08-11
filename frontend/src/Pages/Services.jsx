import React from 'react'
import { Services_cards } from '../Components/Services_cards'
import Services_pic from '../Assets/Services_pic.webp'

export default function Services() {
  
  
  
    const list=['ATM','Carpark','Carwash','Pharmacy','Handicap Assistance','First AID','Gift Wrapping','Free WIFI','Dedicated parking for differently abled at basement','Emergency Response Team']
    const arr=[]
    for(let i=0;i<list.length;i++)
    {
      arr.push(<Services_cards list={list[i]}/>)
    }



  
    return (<>

<div>

<img src={Services_pic} width='100%'/>


</div>


    <div style={{marginTop:'3%' }}>
        {/* <Services_cards list={list}/> */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',justifyItems: 'center',alignItems: 'center' }}>
        {arr}
      </div>


    </div>
    </>)
}
