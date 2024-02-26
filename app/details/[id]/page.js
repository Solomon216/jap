"use client";
import React from 'react'
import { useParams } from 'next/navigation'
import { useState,useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@material-tailwind/react';
import Link from 'next/link';

const Details = () => {
    const {id} = useParams()
    const [users,setUsers]=useState('')
    useEffect(() =>{
        const fetchusers = async () => {
            const response=await fetch('/api/events/'+id);
            const usersInfo= await response.json();
            setUsers(usersInfo.data)
        }
        fetchusers()
    })
  return (
    <div className='flex flex-wrap    w-full h-[650px] relative'>
        {
            users && users.map((u) =>(
                <>
                    <Image className='h-full w-full max-[425px]:w-[405px] max-[425px]:h-[200px] max-[425px]:mx-[10px] max-[425px]:rounded-[10px]' width={1660} height={868} src={u.showmedia} alt={u.name} />
                    <div class="overlay-rect2 max-[425px]:hidden"></div>
                    <div className="absolute z-10 top-5 font-['Coco'] text-6xl w-[800px] pl-6 max-[425px]:relative max-[425px]:top-1 max-[425px]:text-4xl max-[425px]:h-5" >{u.name}</div>
                    <div className='absolute z-10 top-[150px] font-["unige"] text-4xl pl-6 font-bold max-[425px]:relative max-[425px]:top-[50px] max-[425px]:text-3xl max-[425px]:h-5'>{u.artist}</div>
                    <div className='flex absolute z-10 top-60 bg-violet-900 ml-6 p-3 rounded-2xl max-[425px]:relative max-[425px]:top-0 max-[425px]:h-min'>
                        <div class="location text-3xl font-['Verdana'] ">{u.location}</div>
                        <div class="date text-3xl font-['Verdana] mt-3 ">{u.date}</div>
                    </div>
                    <Link href="/stages" className='w-fit h-fit pt-3 pb-3 absolute z-10 top-[65%] ml-6 bg-violet-950 rounded-xl text-4xl pl-5 pr-5 max-[425px]:relative max-[425px]:top-0 max-[425px]:text-4xl '>Buy</Link>
                </>
            ))
        }
    </div>
  )
}

export default Details
