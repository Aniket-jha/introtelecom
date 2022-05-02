import React from 'react'
// import { useNavigate } from 'react-router-dom'
import {
 CursorClickIcon,
 ArrowCircleRightIcon
} from '@heroicons/react/solid'
import Link from "next/link"
import Image from "next/image"
const Banner = () => {
  // const navigate=useNavigate()
  //  const redirectHandler = () => {
  //   navigate("/plans");
  
  return (
    <div className='bg-gradient-to-r from-emerald-600 to-teal-600 w-full '>
        <div className='flex items-center  justify-center flex-col lg:flex-row pt-4 pb-12 lg:p-8'>
        <div className='lg:mr-12 z-[0]'>
            <Image  layout='intrinsic' width="500" height="400"  src={ process.env.NEXT_PUBLIC_URL + "/assets/bannerImage.svg"} alt="bannerpic"/>
           
            </div>
        <div className=' lg:m-12 lg:ml-36'>
            <h1 className='text-2xl text-center  text-white lg:text-4xl  font-bold'> Best Internet, Best Service</h1>
            <p className='text-sm text-center lg:text-right   text-slate-50  lg:text-lg mt-2 lg:mt-3'>Get the Internet that gives you more than you want.</p>
            <Link href="/Plans" passHref>
              <button 
              className=" mt-5 lg:mt-5 lg:ml-56  ml-20 whitespace-nowrap inline-flex items-center justify-center px-6 py-3 lg:px-8 lg:py-4 border border-transparent rounded-md shadow-sm text-base  lg:text-2xl text-emerald-600 bg-white hover:bg-slate-100"
            >
               Get Stared<ArrowCircleRightIcon className=' h-8 w-8 ml-4 text-emerald-600 text-lg'/>
            </button>
           </Link>
             
            </div>
            
        </div>
    </div>
  )
}

export default Banner