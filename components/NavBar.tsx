import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import { UserButton } from '@clerk/nextjs'
import '../app/globals.css'

function NavBar() {
  return (
    <div className='navbackground flex justify-between p-3 px-10 border-b-[1px] shadow-sm'>
      <div className='flex gap-10 items-center'>
          <Image src='/logo.png'
          alt='logo'
          width={120}
          height={60}
          />
          <div className='hidden md:flex gap-6'>
            <h2 className='hover:bg-gray-50 p-2 rounded-md cursor-pointer transition-all'>Home</h2>
            <h2 className='hover:bg-gray-50 p-2 rounded-md cursor-pointer transition-all'>History</h2>
            <h2 className='hover:bg-gray-50 p-2 rounded-md cursor-pointer transition-all'>Help</h2>
          </div>
      </div>
      <div className='flex items-center'>
        <UserButton afterSignOutUrl="/"/>
      </div>
    </div>
  )
}

export default NavBar