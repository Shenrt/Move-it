import React from 'react'
import AutocompleteAddress from './AutocompleteAddress'



function Booking() {
        const screenHight=window.innerHeight*0.72;   
  return (
    <div className='p-5'>
        <h2 className='text-[20px] font-semibold'>Booking</h2>
        <div className='border-[1px] p-5
        rounded-md' style={{height:screenHight}}>
            <AutocompleteAddress/>
        </div>
    </div>
  )
}

export default Booking