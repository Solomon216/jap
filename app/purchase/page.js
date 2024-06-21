"use client"
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import home from "/public/images/Frame 19.png"
import tick from "/public/images/mdi_tick-outline.png"

const Purchase = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <Image src={tick} width={300} height={300} alt="tick" className=''/>
        <div className=' reem text-6xl text-white'>Booked!</div>
        <Link href="/">
            <Image src={home} width={100} height={100} alt="home" className='mt-5' />
        </Link>
    </div>
  )
}

export default Purchase
