"use client"
import React from 'react'
import Link from "next/link"
import Image from 'next/image'


const Navbar = () => {
  return (
    <div className="flex flex-shrink-0 text-white mr-6 justify-center">
        <Link href="/" className='mt-4'>
            <Image src='/images/Frame 4.png' width={140} height={80} alt='jap' className='mt-5 ml-5 ' />
        </Link>
    </div>
  )
}

export default Navbar