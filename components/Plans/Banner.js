import React from 'react'
import {
 CursorClickIcon,
 ArrowCircleRightIcon
} from '@heroicons/react/solid'

import Link from 'next/link'

import Image from 'next/image'
const Banner = () => {
  return (
    <div className='bg-gradient-to-r from-emerald-600 to-teal-600 w-full '>
        <div className='flex items-center  justify-center flex-col lg:flex-row pt-4 pb-12 lg:p-8'>
        <div className='lg:mr-12 z-[0]'>
            <Image width="550" height="400"  src={process.env.NEXT_PUBLIC_URL + "/assets/plans.svg"} alt="bannerpic"/>
           
            </div>
        <div className=' lg:m-12 lg:ml-36'>
            <h1 className='text-3xl text-center lg:text-right  text-white lg:text-4xl  font-bold'>Plans and Services</h1>
            <p className='text-sm text-center lg:text-right   text-slate-50  lg:text-lg mt-2 lg:mt-3'> Get the best plans and services at most Affordable Prices.</p>
            <Link passHref href="/contact" >
             <button className=" mt-5 lg:mt-5 lg:ml-56  ml-24 whitespace-nowrap inline-flex items-center justify-center px-6 py-3 lg:px-8 lg:py-4 border border-transparent rounded-md shadow-sm text-base  lg:text-2xl text-emerald-600 bg-white hover:bg-slate-100">
               Connect Now<ArrowCircleRightIcon className=' h-8 w-8 ml-4 text-emerald-600 text-lg'/></button>
            </Link>
            </div>
            
        </div>
    </div>
  )
}

export default Banner