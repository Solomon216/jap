"use client"
import React from 'react'
import Link from 'next/link'
import { Input } from '@material-tailwind/react'

const Stage = () => {

    function toggleDiv() {
        var div2 = document.getElementById('another-rect');
        div2.style.display = (div2.style.display === 'none') ? 'block' : 'none';
      }
  return (
    <div className="w-[1711px] h-[622px] relative">
        <div className="left-[80px] top-[480px] absolute origin-top-left -rotate-90 text-white text-7xl font-normal reem  tracking-[50px]">STAGE</div>
        <div className='flex gap-7 ml-[220px]'>
            <div className="w-[320px] h-[500px] top-0 relative" onClick={toggleDiv}>
                <div className="w-[320px] h-[500px] left-[10px] top-[18px] absolute bg-gradient-to-b from-red-800 to-red-950 rounded-[50px]"></div>
                <div className="left-[140px] top-[235px] absolute text-white text-7xl font-normal reem  tracking-[71.85px]">A</div>
            </div>
            <div className="w-[320px] h-[500px] top-[3px] relative" onClick={toggleDiv}>
                <div className="w-[320px] h-[500px] left-[8px] top-[15px] absolute bg-gradient-to-b from-yellow-400 to-yellow-800 rounded-[50px]"></div>
                <div className="left-[140px] top-[235px] absolute text-white text-7xl font-normal reem  tracking-[71.85px]">B</div>
            </div>
            <div className="w-[320px] h-[500px] top-0 relative" onClick={toggleDiv}>
                <div className="w-[320px] h-[500px] left-[7px] top-[18px] absolute bg-gradient-to-b from-sky-500 to-teal-900 rounded-[50px]"></div>
                <div className="left-[140px] top-[235px] absolute text-white text-7xl font-normal reem  tracking-[71.85px]">C</div>
            </div>
            <div className="w-[320px] h-[500px] top-[13px] relative" onClick={toggleDiv}>
                <div className="w-[320px] h-[500px] left-[3px] top-[5px] absolute bg-gradient-to-b from-green-500 to-green-950 rounded-[50px]"></div>
                <div className="left-[140px] top-[235px] absolute text-white text-7xl font-normal reem  tracking-[71.85px]">D</div>
            </div>
        </div>
        <div id="another-rect" className='w-[230px] h-[170px] bg-black absolute top-[200px] left-[700px] rounded-[50px] hidden'>
            <div className='color-white text-[30px] ml-[30px] mt-[20px]'>Quantity</div>
            <Input className='ml-[30px] w-[100px] h-[20px] text-black' type='number' max="10"/>
            <br />
            <Link href="/purchase" className='bg-violet-800 w-[150px] ml-[30px] mt-[20px] rounded-[50px] p-2 text-[20px]'>Buy</Link>
        </div>
    </div>
  )
}

export default Stage