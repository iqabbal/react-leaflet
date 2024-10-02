import React from 'react'
import { useState } from 'react'

const Text = ({title , text}) => {
    return <div className='p-4'>
            <p><span className='font-bold'>{title}</span> :  {text}</p>
    </div>
}
/*
Buoy Information: Atlantic-01
Buoy Name/ID: Atlantic-01
Coordinates: Latitude 41.3851° N, Longitude 70.8376° W
Type of Buoy: Navigation Buoy (Port Side Marker)
Date of Deployment: March 15, 2022
Owner/Organization: U.S. Coast Guard
Status: Active and Functional



*/
const Cart = () =>{
    return (
        <div className='mt-8 mr-8 w-[500px] h-[400px] bg-yellow-200 rounded-xl'>
            <Text title="Buoy Name/ID" text="Atlantic-01" />
            <Text title="Coordinates" text="Latitude 41.3851° N, Longitude 70.8376° W" />
            <Text title="Type of Buoy" text="Navigation Buoy (Port Side Marker)" />
            <Text title="Date of Deployment" text="March 15, 2022" />
            <Text title="Owner/Organization" text="U.S. Coast Guard" />
            <Text title="Status" text="Active and Functional" />
            
        </div>
    )
}
const NavigationBuoys = () => {
    const [clicked , setClicked] = useState(false);
  return (
    <div className='relative mt-40 w-[200px] h-[250px] ' onClick={()=>{setClicked(!clicked)}} >
        <div className='ml-[60px] flex gap-4 '>
                <div className=' absolute h-[10px] w-[80px] bg-yellow-400 rotate-45'></div>
                <div className=' absolute h-[10px] w-[80px] bg-yellow-400 rotate-[120deg] '></div>
                <div className=' absolute h-[10px] w-[80px] bg-yellow-400 rotate-90 mt-8'></div>
        </div>
        <div className='mt-16  ml-[60px]'>
            <div className='  top-[10px] h-[100px] w-[80px] bg-yellow-400 rounded-tl-xl rounded-tr-xl'></div>
        </div>
        <div>
            <div className=" w-full bg-yellow-400 h-[70px] rounded-xl" > </div>
        </div>
        {/* cart */}
        {clicked && <Cart/>}
    </div>
  )
}

export default NavigationBuoys