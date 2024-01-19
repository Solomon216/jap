"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState,useEffect } from 'react'


export default function Home() {
  const [users,setUsers]=useState('')
    useEffect(() =>{
        const fetchusers = async () => {
            const response=await fetch('/api/events');
            const usersInfo= await response.json();
            setUsers(usersInfo.data)
        }
        fetchusers()
    })
    const route="/details/"
  return (
    <div>
      <h1 className="events font-sans">EVENTS</h1>
      <div className='flex flex-wrap justify-center gap-10 pl-[180px] pr-[180px] mt-5'>
      {
        users && users.map((u) =>(
          <Link key={u._id} href={route+u.id}>
            <div className="w-[275px] h-[350px] relative overflow-hidden rounded-[30px]" id="card1">
              <Image className='rounded-2xl' src={u.image} alt={u.name} width={275} height={350} />
              <div class="overlay-rect absolute"></div>
              <div class="text-white absolute top-[240px] text-center text-[35px] break-words align-middle z-10 font-['LM'] mb-3 pl-3 pr-3">{u.name}</div>
            </div>
          </Link>
        ))
      }
      </div>
    </div>
  )
}
